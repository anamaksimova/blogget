import style from './Search.module.css';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchRequest} from '../../../store/search/searchAction';
import searchImg from './img/searchImg.svg';
export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const token = useSelector((state) => state.tokenReducer.token);
  const handlerSubmit = e => {
    e.preventDefault();
    dispatch(searchRequest({token, search}));
  };
  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <input className={style.search}
        type='search'
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
      <button className={style.button} type='submit'>
        <img className={style.svg} src={searchImg} alt="search Blogget"/>
      </button>
    </form>
  );
};
