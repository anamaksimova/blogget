import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname',
      ups: 24,
      date: '2022-03-24T09:45:00.00Z',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname',
      ups: 55,
      date: '2022-04-24T09:55:00.00Z',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname',
      ups: 44,
      date: '2022-02-24T09:45:00.00Z',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname',
      ups: 33,
      date: '2022-06-21T09:45:00.00Z',
    },
  ];
  return (
    <ul className={style.list}>
      { postsData.map((postData) => (
        <Post key={postData.id} postData={postData}/>
      ))}


    </ul>
  );
};
