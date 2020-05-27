import React from 'react';
import './header.css';

const HeaderPost = props => {
  return (
    <div className='header'>
      <img src={props.thumbnail} className='thumbnail' />
      <p className='username'>{props.usernames}</p>
    </div>
  );
};
export default HeaderPost;
