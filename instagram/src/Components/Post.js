import React from 'react';
import PropTypes from 'prop-types';
import './../App.css';


const Post = props => {
  return (
    <div className='images'>
      <img src={props.thumbnail} alt='thumb' className='thumbnail'/>
      <p className='username'>{props.username}</p>
      <div>
        <img src={props.image} />
      </div>
    </div>
    
  );
};



export default Post;

