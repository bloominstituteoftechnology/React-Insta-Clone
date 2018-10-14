import React from 'react';
import PostContent from '../PostContent/PostContent.js'
import CommentSection from '../CommentSection/CommentSection.js'

const PostInstance= props => {

  return (
    <div id="postInstance">
      PostInstance
      <p>{props.username}</p>
      <p>{props.likes}</p>
        <PostContent username={props.username} imageUrl={props.imageUrl} thumbnailUrl={props.thumbnailUrl} ></PostContent>
        <CommentSection  likes={props.likes} commentArray={props.commentsArray} commentsUpdater={this.props.commentsUpdater} commentsEventHandler={this.props.commentsEventHandler}/>
    </div>
  );
};

export default PostInstance;

/*
const Todo = props => {
  let classes = "todoItem";
    if(props.completed) {
      classes += " done"
   }
  
      return (
        <div>
          <p onClick={props.clearCrossThrough} className={classes} id={props.id}>{props.task}</p>
          
        </div>
      );
  }
  
  
  export default Todo;

 
  
  */