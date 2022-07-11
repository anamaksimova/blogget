import {createStore} from 'redux';
import {getToken, setToken} from '../api/token';
const UPDATE_COMMENT = 'UPDATE_COMMENT';
const DELETE_TOKEN = 'DELETE_TOKEN';
const UPDATE_TOKEN = 'UPDATE_TOKEN';
const initionalState = {
  comment: 'Hi',
  token: getToken(),
};
export const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment,
});
export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token,
});
export const deleteToken = (token = '') => ({
  type: DELETE_TOKEN,
  token,
});
const rootReducer = (state = initionalState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
    case DELETE_TOKEN:
      setToken(action.token);
      return {
        ...state,
        token: '',
      };

    case UPDATE_TOKEN:
      setToken(action.token);
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};
export const store = createStore(rootReducer);
