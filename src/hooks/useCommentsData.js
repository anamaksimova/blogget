import {useEffect} from 'react';
import {commentsRequestAsync} from '../store/comments/commentsAction';
import {useSelector, useDispatch} from 'react-redux';
export const useCommentsData = (id) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.tokenReducer.token);
  const comments = useSelector(state => state.commentsReducer.data);
  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [token]);

  return comments;
};
