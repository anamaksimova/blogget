import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
// import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useEffect} from 'react';
import {useCommentsData} from '../../hooks/useCommentsData';
import {FormComment} from './FormComment/FormComment';
import {Comments} from './Comments/Comments';

export const Modal = ({id, onClose, isModalOpen}) => {
  const {title, author, markdown, comment} = useCommentsData(id);

  useEffect(() => {
    const closeOnEscapeKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [isModalOpen]);

  return (ReactDOM.createPortal(
    <div className={style.overlay} >
      <div className={style.modal} >
        <h2 className={style.title}>{title}</h2>
        <div className={style.content}>
          {markdown}
          {/* <Markdown options={{
            overrides: {
              a: {
                props: {
                  target: '_blank',
                },
              },
            },
          }}>
            {markdown}
          </Markdown> */}
        </div>
        <p className={style.author}>{author}</p>
        <FormComment/>
        <Comments comments={comment}/>
        <button className={style.close} onClick={onClose}>
          <CloseIcon/></button>
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
