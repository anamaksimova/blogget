import axios from 'axios';
import {URL_API} from '../../api/const';
import {createAsyncThunk} from '@reduxjs/toolkit';


// export const commentsRequestAsync2 = (id) => (dispatch, getState) => {
//   const token = getState().tokenReducer.token;

//   if (!token) return;
//   dispatch(commentsSlice.actions.commentsRequest());
//   axios(`${URL_API}/comments/${id}?limit=5`, {
//     headers: {
//       Authorization: `bearer ${token}`,
//     },
//   }).then(
//     ({data: [
//       {
//         data: {
//           children: [{data: {title, author, selftext: markdown}}],
//         },
//       },
//       {
//         data: {children},
//       },
//     ]}) => {
//       const comms = children.filter(item => {
//         if (item.kind === 't1') {
//           return item.data;
//         } else {
//           console.log('item.data: ', item.data);
//         }
//       });
//       const comment = comms.map(item => item.data);
//       dispatch(
//         commentsSlice.actions.commentsRequestSuccess(
//           {title, author, markdown, comment}));
//     })
//     .catch((error) => {
//       dispatch(commentsSlice.actions.commentsRequestError(
//         {error: error.toString()}));
//     });
// };

export const commentsRequestAsync = createAsyncThunk('comments/fetch',
  (id, {getState}) => {
    const token = getState().tokenReducer.token;
    if (!token) return;
    return axios(`${URL_API}/comments/${id}?limit=5`, {
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
        return {title, author, markdown, comment};
      })
      .catch((error) => ({error: error.toString()}));
  });

