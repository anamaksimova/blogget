import {SEARCH_REQUEST,
  SEARCH_REQUEST_ERROR,
  SEARCH_REQUEST_SUCCESS} from './searchAction';

const initialState = {
  states: '',
  posts: [],
  error: '',
  after: '',
  loading: false,
  isLast: false,
  page: '',
};
export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
        after: action.after,
        error: '',
      };
    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
