import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {usePosts} from '../hooks/usePosts';
export const postsContext = React.createContext({});
export const PostsContextProvider = ({children}) => {
  const [posts] = usePosts();


  posts.forEach(el => {
    const {id, title, author, ups, created} = el;
  });
  return (
    <postsContext.Provider value={{id, title, author, ups, created}}>

      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
