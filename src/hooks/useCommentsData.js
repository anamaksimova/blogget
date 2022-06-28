import {useEffect, useState, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';
export const useCommentsData = (id) => {
  const {token, delToken} = useContext(tokenContext);
  const [comments, setComments] = useState({});
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(response => {
      if (response.status === 401) {
        delToken();
      }
      return response.json();
    })
      .then(
        ([
          {
            data: {
              children: [{data: {title, author, selftext: markdown}}],
            },
          },
          {
            data: {children},
          },
        ]) => {
          const comment = children.map(item => item.data);
          setComments({title, author, markdown, comment});
        })
      .catch(err => {
        console.log(err);
      });
  }, [token]);

  return comments;
};
