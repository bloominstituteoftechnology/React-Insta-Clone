import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import './postContainer.css';

const PostContainer = (props) => {
    // console.log(props);
    return (
      <div className="container">
        <h1>{props.data.username}</h1>
        <CommentSection comments={props.data.comments} change={props.change} input={props.input} addinput={props.addinput}/>
      </div>
    );
  
};
PostContainer.propTypes ={
    data: PropTypes.shape({
        likes: PropTypes.number,
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string.isRequired,
    })
}
export default PostContainer;
