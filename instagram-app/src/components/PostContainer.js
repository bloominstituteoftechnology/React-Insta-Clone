
import React from '../../node_modules/react';
import CommentSection from './CommentSection';

const PostContainer = props => {
    console.log(props)
    return (
    <div>{props.info.map(each => <CommentSection comment={each} />)}</div>
    );
  };


  export default PostContainer;