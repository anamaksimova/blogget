import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {useEffect} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {FormComment} from './FormComment/FormComment';
import {Comments} from './Comments/Comments';
import {useSelector} from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const {title, author, markdown, comment} = useCommentsData(id);
  const states = useSelector(state => state.commentsReducer.states);
  const closeOnEscapeKey = e => {
    if (e.key === 'Escape') navigate(`/category/${page}`);
  };
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, []);

  return (ReactDOM.createPortal(
    <div className={style.overlay} >
      <div className={style.modal} >
        {states === 'loading' && 'Загрузка...'}
        {states === 'error' && 'Ошибка...'}
        {states === 'loaded' && (
          <div>
            <h2 className={style.title}>{title}</h2>
            <div className={style.content}>
              {markdown}
            </div>
            <p className={style.author}>{author}</p>
            <FormComment/>
            <Comments comments={comment}/>
            <button className={style.close} onClick={() => {
              navigate(`/category/${page}`);
            }}>
              <CloseIcon/></button>
          </div>
        )}
      </div>
    </div>,
    document.getElementById('modal-root'),
  )
  );
};
Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,

};
