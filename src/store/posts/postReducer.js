import {POST_REQUEST,
  POST_REQUEST_SUCCESS,
  POST_REQUEST_ERROR,
  POST_REQUEST_SUCCESS_AFTER,
  CHANGE_PAGE,
} from './postAction';
const initialState = {
  states: '',
  posts: [],
  error: '',
  after: '',
  loading: false,
  isLast: false,
  page: '',
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        states: 'loading',
        error: '',
        loading: true,
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        states: 'loaded',
        posts: action.posts,
        error: '',
        after: action.after,
        loading: false,
        isLast: !action.after,
      };
    case POST_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        states: 'loaded',
        posts: [...state.posts, ...action.posts],
        error: '',
        after: action.after,
        loading: false,
        isLast: !action.after,
      };
    case POST_REQUEST_ERROR:
      return {
        ...state,
        states: 'error',
        error: action.error,
        loading: false,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        states: 'loaded',
        page: action.page,
        after: '',
        isLast: false,
      };

    default:
      return state;
  }
};
