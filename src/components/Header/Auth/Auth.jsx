import style from './Auth.module.css';
import {useState} from 'react';
import {useAuth} from '../../../hooks/useAuth';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';
import {deleteToken} from '../../../store/tokenReducer';
import {useDispatch} from 'react-redux';
import AuthLoader from '../../../UI/AuthLoader';


export const Auth = () => {
  const [isLogout, setIsLogout] = useState(false);
  const [auth, loading, clearAuth] = useAuth();
  const dispatch = useDispatch();
  return (
    <div className={style.container}>
      {loading ? (
      <AuthLoader/>
        ) : auth.name ? (
        <button className={style.btn} onClick={() => {
          setIsLogout(!isLogout);
        }}>
          <img className={style.img}
            src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`}/>
          {isLogout && <button className={style.logout}
            onClick={() => {
              clearAuth();
              dispatch(deleteToken());
            }
            }>Выйти</button>}
        </button>
     ) : (
      <Text className={style.authLink} As='a' href={urlAuth}>
        <LoginIcon width={30} height={30}/>
      </Text>
    )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  // deleteToken: PropTypes.func,
};
