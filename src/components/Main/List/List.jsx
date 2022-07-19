import style from './List.module.css';
import Post from './Post';
import React, {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {postRequestAsync} from '../../../store/posts/postAction';
import {useParams, Outlet} from 'react-router-dom';
// import {usePosts} from '../../../hooks/usePosts';

export const List = () => {
  const {page} = useParams();
  const endList = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postRequestAsync(page));
  }, [page]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });
    observer.observe(endList.current);
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);
  return (
    <>
      <ul className={style.list}>
        <Post/>
        <li ref={endList} className={style.end}/>
      </ul>
      <Outlet/>
    </>
  );
};


