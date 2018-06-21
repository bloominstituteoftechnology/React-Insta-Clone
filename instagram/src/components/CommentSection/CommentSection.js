import React, {Component} from 'react';
import Comment from './Comment';
import './comment-section.css';
import AddAComment from '../CommentSection/AddAComment';
import IconHeaderBar from '../CommentSection/IconHeaderBar';

class CommentSection extends Component {
 constructor(props) {
   super(props);
   this.state ={
     comments: props.comments,
     newComment: '',
     username: 'jjashcraft',
     likes: props.likes,
     userLiked: false,
   }
 }

 addComment= (event) => {
 event.preventDefault();
 let comments = this.state.comments.slice();
 let newComment = this.state.newComment;
 comments.push({text: newComment, username: this.state.username});
 this.setState({comments: comments});

 }  
  addLike=(event) => {
    if (this.state.userLiked === false) {
    event.target.className = 'fas fa-heart liked-button';
    console.log('plus one like');
 let likes = this.state.likes;
 likes = likes + 1;  
 this.setState({
   likes : likes,
   userLiked: true,
});
    } else {
event.target.className = 'far fa-heart like-button';
console.log('no more likey');
let likes = this.state.likes;
likes = likes - 1;
this.setState({
  likes: likes,
  userLiked: false,
});


    }

 }  
 

 handleChange = (event) => {
this.setState({newComment: event.target.value});
 }

 render() {
    return (
      <div className='comments'>

      <IconHeaderBar userLiked = {this.state.userLiked} addLike = {this.addLike} likes = {this.state.likes} />
            <ul>
            {this.state.comments.map((comment, index) => {
                
    return <Comment key = {Math.random()} username = {comment.username} text = {comment.text}/>
       })}
        </ul>
    
<AddAComment value = {this.state.newComment} handleChange={this.handleChange} addComment = {this.addComment} />
  </div>
    
      );
};
};

export default CommentSection;