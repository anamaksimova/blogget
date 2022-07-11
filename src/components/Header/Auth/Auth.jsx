import style from './Auth.module.css';
import {useState, useContext} from 'react';

import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';
import {authContext} from '../../../context/authContext';
import {deleteToken} from '../../../store';
import {useSelector} from 'react-redux';

export const Auth = () => {
  const token = useSelector(state => state.token);
  const [isLogout, setIsLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);
  return (
    <div className={style.container}>
      {auth.name ? (
        <button className={style.btn} onClick={() => {
          setIsLogout(!isLogout);
        }}>
          <img className={style.img}
            src={auth.img} title={auth.name} alt={`Аватар ${auth.name}`}/>
          {isLogout && <button className={style.logout}
            onClick={() => {
              clearAuth();
              deleteToken(token);
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
  deleteToken: PropTypes.func,
};
