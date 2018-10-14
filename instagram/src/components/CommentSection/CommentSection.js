import React from 'react';
import IconBar from './IconBar.js'
import CommentFeed from'./CommentFeed.js'
import CommentForm from'./CommentForm.js'

class CommentSection extends React.Component {
  constructor(props) {
  
    super(props);
    this.state = {
      posts: [],
      filteredPosts: [],
      commentArray: props.commentArray,
      likes: props.likes
    };
  }
  commentsEventHandler = e => {
    if (e.key === 'Enter') {
    e.persist();
   const updateArray = this.state.commentArray;
   const newCommentText = e.target.value
   const userName = "katiefizzy"
   const newComment = { text: newCommentText, username: userName }
   updateArray.push(newComment)

   this.setState({ commentArray: updateArray });


      e.preventDefault();
    }
          
        };
      

  render(){
  return (
    <div id='commentSection'>
      CommentSection
        <IconBar likes={this.state.likes}></IconBar>
        <CommentFeed commentArray={this.state.commentArray}></CommentFeed>
        <CommentForm commentsEventHandler={this.commentsEventHandler}></CommentForm>
    </div>
  );
};
}
export default CommentSection;
