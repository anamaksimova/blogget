import {setToken} from '../api/token';

const DELETE_TOKEN = 'DELETE_TOKEN';
const UPDATE_TOKEN = 'UPDATE_TOKEN';
const initionalState = {
  token: '',
};

export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token,
});
export const deleteToken = () => ({
  type: DELETE_TOKEN,
  token: '',
});
export const tokenMiddleware = store => next => (action) => {
  if (action.type === UPDATE_TOKEN) {
    setToken(action.token);
  }
  if (action.type === DELETE_TOKEN) {
    setToken('');
  }
  next(action);
};
export const tokenReducer = (state = initionalState, action) => {
  switch (action.type) {
    case DELETE_TOKEN:
      setToken('');
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
