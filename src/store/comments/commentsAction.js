import axios from 'axios';
import {URL_API} from '../../api/const';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';
export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const commentsRequest = () => ({
  type: COMMENTS_REQUEST,
});
export const commentsRequestSuccess = (data) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  data,
});
export const commentsRequestError = (error) => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});

export const commentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;

  if (!token) return;
  axios(`${URL_API}/comments/${id}?limit=5`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }).then(
    ({data: [
      {
        data: {
          children: [{data: {title, author, selftext: markdown}}],
        },
      },
      {
        data: {children},
      },
    ]}) => {
      const comms = children.filter(item => {
        if (item.kind === 't1') {
          return item.data;
        } else {
          console.log('item.data: ', item.data);
        }
      });
      const comment = comms.map(item => item.data);
      dispatch(commentsRequestSuccess({title, author, markdown, comment}));
    })
    .catch(err => {
      console.log(err);
      dispatch(commentsRequestError(err.toString()));
    });
};
