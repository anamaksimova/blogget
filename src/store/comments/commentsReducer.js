import {COMMENTS_REQUEST,
  COMMENTS_REQUEST_SUCCESS,
  COMMENTS_REQUEST_ERROR,
} from './commentsAction';
const initialState = {
  states: '',
  data: [],
  error: '',
};
export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        states: 'loading',
        error: '',
      };
    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        states: 'loaded',
        data: action.data,
        error: '',
      };
    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        states: 'error',
        error: action.error,
      };

    default:
      return state;
  }
};
