import style from './Search.module.css';
import search from './img/search.svg';
export const Search = () => (
  <form className={style.form}>
    <input className={style.search} type='search'/>
    <button className={style.button}>
      <img className={style.search} src={search} alt="search Blogget"/>
    </button>
  </form>
);
