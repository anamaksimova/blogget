import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import {formatDate} from '../../../../utils/formatDate';
import Rating from './Rating';
import Content from './Content';
import DeleteBtn from './DeleteBtn';
import {useSelector} from 'react-redux';
import {usePosts} from '../../../../hooks/usePosts';
import AuthLoader from '../../../../UI/AuthLoader';

export const Post = () => {
  const [posts] = usePosts();
  const states = useSelector(state => state.postReducer.states);
  console.log('states: ', states);
  return (posts.map(el => {
    const {id, title, author, ups, created} = el;
    return (<>
      {states === 'loading' && (<AuthLoader/>)}
      {states === 'loaded' && (
        <li key={id} className={style.post}>
          <img className={style.img} src={notphoto} alt={title}/>
          <Content title={title} author={author} id={id}/>
          <Rating ups={ups}/>
          <DeleteBtn/>
          <time className={style.date} dateTime={created}>
            {formatDate(created)}</time>
        </li>)
      }
    </>);
  }));
};
// Post.propTypes = {
//   postData: PropTypes.object,
// };
