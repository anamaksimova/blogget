import style from './Auth.module.css';
import {useEffect, useState} from 'react';
import {URL_API} from '../../../api/const';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';
// import login from './img/login.svg'

export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  const [isLogout, setIsLogout] = useState(false);
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    }).then(response => {
      if (response.status === 401) {
        console.log(response.status);
        delToken();
      }
      return response.json();
    })
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(err => {
        console.log(err);
        setAuth({});
      });
  }, [token]);
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
              setAuth({});
              delToken();
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
  delToken: PropTypes.func,
};
