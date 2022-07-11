import {useSelector, useDispatch} from 'react-redux';
import style from './FormComment.module.css';

import {updateComment} from '../../../store';
export const FormComment = () => {
  const value = useSelector(state => state.comment);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };
  return (
    <form className={style.form}>
      <h3>Имя авторизованного пользователя</h3>
      <textarea className={style.textarea}
        value={value}
        onChange={handleChange}></textarea>
      <button className={style.btn} onClick={(e) => {
        e.preventDefault();
        console.log(value);
      }}>Отправить</button>
    </form>
  );
};

