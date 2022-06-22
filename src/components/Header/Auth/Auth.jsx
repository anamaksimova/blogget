import style from './Auth.module.css';
import {ReactComponent as LoginIcon} from './img/login.svg';
// import login from './img/login.svg'

export const Auth = ({auth}) => {
return (
  <button className={style.button}>
  {auth ? auth :
    <LoginIcon width={30} height={30}/>
  }
  </button>
  )
}