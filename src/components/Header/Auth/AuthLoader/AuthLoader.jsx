import style from './AuthLoader.module.css';
import RingLoader from 'react-spinners/RingLoader';
export const AuthLoader = () => {
  console.log(style);
  return (
    <RingLoader color='#cc6633' css={{display: 'block'}} size={30}/>
  );
};
