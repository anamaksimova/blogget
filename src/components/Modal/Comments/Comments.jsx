import style from './Comments.module.css';
import PropTypes from 'prop-types';
import {formatDate} from '../../../utils/formatDate';
import Markdown from 'markdown-to-jsx';
export const Comments = ({comments}) => {
  let coms = '';

  if (comments) {
    if (comments.length === 0) {
      coms = 'Нет комментариев';
    } else {
      coms = comments.map(({author, body, created, id}) => (
        <li key={id} className={style.item}>
          <h3 className={style.author}>{author}</h3>
          <p className={style.comment}>
            <Markdown options={{
              overrides: {
                a: {
                  props: {
                    target: '_blank',
                  },
                },
              },
            }}>
              {body}
            </Markdown>
          </p>
          <time className={style.comment} dateTime={created}>
            {formatDate(created)}</time>
        </li>
      ),
      );
    }
  } else {
    coms = 'Загрузка...';
  }
  return (<ul className={style.list}>
    {coms}
  </ul>);
};

Comments.propTypes = {
  comments: PropTypes.array,
};

