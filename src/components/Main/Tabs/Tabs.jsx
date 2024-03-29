import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import {useEffect, useState} from 'react';
import {assignId} from '../../../utils/generateRandomId';
import {ReactComponent as ArrowIcon} from './img/arrow.svg';
import {ReactComponent as BestIcon} from './img/best.svg';
import {ReactComponent as HomeIcon} from './img/home.svg';
import {ReactComponent as HotIcon} from './img/hot.svg';
import {ReactComponent as TopIcon} from './img/top.svg';
import {debounceRaf} from '../../../utils/debounce';
import {Text} from '../../../UI/Text/Text';
import {useNavigate} from 'react-router-dom';

const LIST = [
  {value: 'Главная', Icon: HomeIcon, link: '/'},
  {value: 'Топ', Icon: TopIcon, link: '/category/top'},
  {value: 'Лучшие', Icon: BestIcon, link: '/category/best'},
  {value: 'Горячие', Icon: HotIcon, link: '/category/hot'},
].map(assignId);
export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [valueMenu, setValueMenu] = useState('Выбрать');
  const navigate = useNavigate();
  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };
  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);
  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {valueMenu}
            <ArrowIcon width={15} height={15}/>
          </button>
        </div>
      )}
      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {LIST.map(({value, link, id, Icon}) => (
            <Text As='li' className={style.item} key={id}>
              <Text As='button'
                className={style.btn} onClick={() => {
                  setValueMenu(value);
                  navigate(`${link}`);
                }}>
                {value}
                {Icon && <Icon width={30} height={30}/>}
              </Text>
            </Text>
          ))}
        </ul>)}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
