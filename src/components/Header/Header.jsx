import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Auth from './Auth';
import Search from './Search';
import Heading from './Heading';
import {Route, Routes} from 'react-router-dom';
export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo/>
        <Routes>
          <Route path='/' element={<Heading text='Главная'/>}></Route>
          <Route path={`/category/:page`}
            element={<Heading text='Посты'/>}></Route>
        </Routes>
        <Search/>
        <Auth/>
      </div>
    </Layout>
  </header>
);

// Header.propTypes = {
//   token: PropTypes.string,
//   delToken: PropTypes.func,
// };
