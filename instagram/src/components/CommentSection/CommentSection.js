import React from 'react';
import ReactDOM from 'react-dom';
import PostContainer from './../PostContainer/PostContainer'
import PropTypes from 'prop-types';

const CommentSection = (props) => {
  return (
   
    <div >
      {props.comm.map( comm => {
        return( <div key={`${comm.username}${comm.text}`}><div>{comm.username}</div>
          <div>{comm.text}</div></div>
          )
      })}
    </div>
   
  );
}


CommentSection.propTypes = {
  comm: PropTypes.arrayOf(PropTypes.shape(
    {
    username: PropTypes.string,
    text: PropTypes.string    
    }
  ))
  }
export default CommentSection;
