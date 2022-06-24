import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
// import PropTypes from 'prop-types';
import {formatDate} from '../../../../utils/formatDate';
import Rating from './Rating';
import Content from './Content';
import DeleteBtn from './DeleteBtn';
import {useContext} from 'react';
import {postsContext} from '../../../../context/postsContext';

export const Post = () => {
  // const {title, author, ups, created} = postData;
  const {posts} = useContext(postsContext);

  return (posts.map(el => {
    const {id, title, author, ups, created} = el;
    return (
      <li key={id} className={style.post}>
        <img className={style.img} src={notphoto} alt={title}/>
        <Content title={title} author={author}/>
        <Rating ups={ups}/>
        <DeleteBtn/>
        <time className={style.date} dateTime={created}>
          {formatDate(created)}</time>
      </li>
    );
  }));
};
// Post.propTypes = {
//   postData: PropTypes.object,
// };
