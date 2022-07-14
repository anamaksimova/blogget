import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenReducer, tokenMiddleware} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {authReducer} from './auth/authReducer';
import {postReducer} from './posts/postReducer';
import {commentsReducer} from './comments/commentsReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  tokenReducer,
  commentReducer,
  authReducer,
  postReducer,
  commentsReducer,
});
export const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
