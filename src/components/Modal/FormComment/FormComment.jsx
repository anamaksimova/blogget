import {useRef} from 'react';
import style from './FormComment.module.css';


export const FormComment = () => {
  const textRef = useRef(null);
  return (
    <form className={style.form}>
      <h3>Имя авторизованного пользователя</h3>
      <textarea className={style.textarea} ref={textRef}></textarea>
      <button className={style.btn} onClick={(e) => {
        e.preventDefault();
        console.log(textRef.current.value);
      }}>Отправить</button>
    </form>
  );
};

