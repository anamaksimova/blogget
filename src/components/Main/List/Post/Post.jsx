import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import {formatDate} from '../../../../utils/formatDate';
import Rating from './Rating';
import Content from './Content';
import DeleteBtn from './DeleteBtn';
export const Post = ({postData}) => {
  const {title, author, ups, date} = postData;
  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title}/>
      <Content title={title} author={author}/>
      <Rating ups={ups}/>
      <DeleteBtn/>
      <time className={style.date} dateTime={date}>{formatDate(date)}</time>
    </li>
  );
};
Post.propTypes = {
  postData: PropTypes.object,
};
