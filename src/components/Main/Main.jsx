import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
// import React, {useState} from 'react';
// import {assignId} from '../../utils/generateRandomId';

// import {PostsContextProvider} from '../../context/postsContext';
export const Main = () =>
  // // eslint-disable-next-line no-undef
  // const [list, setList] = useState(LIST);
  // const addItem = () => {
  //   setList([...list, assignId({value: 'New'})]);
  // };
  (
    <main className={style.main}>
      <Layout>
        <Tabs />
        {/* <PostsContextProvider> */}
        <List/>
        {/* </PostsContextProvider> */}
      </Layout>
    </main>
  );


