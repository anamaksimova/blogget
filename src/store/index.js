import {tokenReducer, tokenMiddleware} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {authReducer} from './auth/authReducer';
import {searchReducer} from './search/searchReducer';
import postReducer from './posts/postsSlice';
import commentsReducer from './comments/commentsSlice';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    authReducer,
    postReducer,
    commentsReducer,
    searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware, sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
