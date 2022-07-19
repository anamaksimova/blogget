import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {postRequestAsync} from '../store/posts/postAction';

export const usePosts = () => {
  const token = useSelector(state => state.tokenReducer.token);
  const posts = useSelector(state => state.postReducer.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postRequestAsync());
  }, [token]);

  return [posts];
};


