import {POST_REQUEST,
  POST_REQUEST_SUCCESS,
  POST_REQUEST_ERROR,
} from './postAction';
const initialState = {
  states: '',
  data: [],
  error: '',
};
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        states: 'loading',
        error: '',
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        states: 'loaded',
        data: action.data,
        error: '',
      };
    case POST_REQUEST_ERROR:
      return {
        ...state,
        states: 'error',
        error: action.error,
      };

    default:
      return state;
  }
};
