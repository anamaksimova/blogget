import style from './List.module.css';
import Post from './Post';
import React from 'react';
// import {usePosts} from '../../../hooks/usePosts';

export const List = () => (
  <ul className={style.list}>
    <Post />
  </ul>);

