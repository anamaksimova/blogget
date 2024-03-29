import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {MainPage} from './MainPage/MainPage';
import {ErrorPage} from './ErrorPage/ErrorPage';
import {Route, Routes} from 'react-router-dom';
import Modal from '../Modal';


export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path={`/:auth`} element={<MainPage/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
        <Route path={`/category/:page`} element={<List/>}>
          <Route path='post/:id' element={<Modal/>}/>
        </Route>
      </Routes>
    </Layout>
  </main>
);
