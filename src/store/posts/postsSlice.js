import {createSlice} from '@reduxjs/toolkit';
import {postRequestAsync} from './postAction';
const initialState = {
  states: '',
  posts: [],
  error: '',
  after: '',
  loading: false,
  isLast: false,
  page: '',
};
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // // postsRequest: (state) => {
    // //   state.error = '';
    // //   state.states = 'loading';
    // //   state.loading = true;
    // // },
    changePage: (state, action) => {
      state.states = 'loaded';
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
    },
    // postsRequestSuccessAfter: (state, action) => {
    //   state.states = 'loaded';
    //   state.posts = [...state.posts, ...action.payload.children];
    //   state.error = '';
    //   state.after = action.payload.after;
    //   state.loading = false;
    //   state.isLast = !action.payload.after;
    // },
    // postsRequestSuccess: (state, action) => {
    //   state.posts = action.payload.children,
    //   state.after = action.payload.after;
    //   state.loading = false;
    //   state.isLast = !action.payload.after;
    //   state.states = 'loaded';
    //   state.error = '';
    // },
    // postsRequestError: (state, action) => {
    //   state.states = 'error';
    //   state.error = action.error;
    //   state.loading = false;
    // },
  },
  extraReducers: {
    [postRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.states = 'loading';
      state.loading = true;
    },
    // changePage: (state, action) => {
    //   state.states = 'loaded';
    //   state.page = action.payload;
    //   state.after = '';
    //   state.isLast = false;
    // },
    // postsRequestSuccessAfter: (state, action) => {
    // state.states = 'loaded';
    // state.posts = [...state.posts, ...action.payload.children];
    // state.error = '';
    // state.after = action.payload.after;
    // state.loading = false;
    // state.isLast = !action.payload.after;
    // },
    [postRequestAsync.fulfilled.type]: (state, action) => {
      state.posts = action.payload.children,
      state.after = action.payload.after;
      state.loading = false;
      state.isLast = !action.payload.after;
      state.states = 'loaded';
      state.error = '';
    },
    [postRequestAsync.rejected.type]: (state, action) => {
      state.states = 'error';
      state.error = action.error;
      state.loading = false;
    },
  }
});
export default postsSlice.reducer;
