import {useEffect, useState, useContext} from 'react';
// import {assignId} from '../utils/generateRandomId';
import {URL_API} from '../api/const';
// import {postsContext} from '../context/postsContext';
import {tokenContext} from '../context/tokenContext';
export const usePosts = () => {
  const {token, delToken} = useContext(tokenContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best?limit=5`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(response => {
      if (response.status === 401) {
        delToken();
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
