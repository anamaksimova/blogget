import axios from 'axios';
import {URL_API} from '../../api/const';
import {postsSlice} from './postsSlice';
// import {createAsyncThunk} from '@reduxjs/toolkit';
export const postRequestAsync = (newPage) => (dispatch, getState) => {
  let page = getState().postReducer.page;
  if (newPage) {
    page = newPage;
    dispatch(postsSlice.actions.changePage(page));
  }
  const token = getState().tokenReducer.token;
  const after = getState().postReducer.after;
  const loading = getState().postReducer.loading;
  const isLast = getState().postReducer.isLast;

  if (!token || loading || isLast) return;
  if (!after) {
    dispatch(postsSlice.actions.postsRequest());
  }
  axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  }).then(({data}) => {
    if (after) {
      dispatch(postsSlice.actions.postsRequestSuccessAfter(data.data));
    } else {
      dispatch(postsSlice.actions.postsRequestSuccess(data.data));
    }
  })
    .catch(error => {
      dispatch(postsSlice.actions.postsRequestError({error: error.toString()}));
    });
};

// export const postRequestAsync = createAsyncThunk('posts/fetch',
//   (newPage, {getState}, {dispatch}) => {
//     let page = getState().postReducer.page;
//     if (newPage) {
//       page = newPage;
//       dispatch(postsSlice.actions.changePage(page));
//     }
//     const token = getState().tokenReducer.token;
//     const after = getState().postReducer.after;
//     const loading = getState().postReducer.loading;
//     const isLast = getState().postReducer.isLast;

//     if (!token || loading || isLast) return;
//     if (!after) {
//       // eslint-disable-next-line max-len
//       return
//  axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`,
//         {
//           headers: {
//             Authorization: `bearer ${token}`,
//           },
//         }).then(({data}) => {
//         if (after) {
//           // return data.data;
//           dispatch(postsSlice.actions.postsRequestSuccessAfter(data.data));
//         } else {
//           return data.data;
//         }
//       })
//         .catch(error => ({error: error.toString()}));
//     }
//   }
// );
