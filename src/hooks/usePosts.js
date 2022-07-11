import {useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {deleteToken} from '../store';
import {useSelector} from 'react-redux';

export const usePosts = () => {
  const token = useSelector(state => state.token);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best?limit=20`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(response => {
      if (response.status === 401) {
        deleteToken(token);
      }
      return response.json();
    })
      .then(({data}) => {
        const LIST = [];
        data.children.forEach(element => {
          LIST.push(element.data);
        });
        setPosts(LIST);
      })
      .catch(err => {
        console.log(err);
      });
  }, [token]);

  return [posts];
};
