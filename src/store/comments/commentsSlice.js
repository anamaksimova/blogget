import {createSlice} from '@reduxjs/toolkit';
import {commentsRequestAsync} from './commentsAction';
const initialState = {
  states: '',
  data: [],
  error: '',
};
export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [commentsRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.states = 'loading';
    },
    [commentsRequestAsync.fulfilled.type]: (state, action) => {
      state.states = 'loaded';
      state.data = {comment: action.payload.comment,
        title: action.payload.title,
        author: action.payload.author,
        markdown: action.payload.markdown};
      state.error = '';
    },
    [commentsRequestAsync.rejected.type]: (state, action) => {
      state.states = 'error';
      state.error = action.error;
    },
  }
});
export default commentsSlice.reducer;
