import React from 'react';
import './CommentContainer.css'
import Comment from './Comment'

class CommentSection extends React.Component {
 constructor(props){
  super(props);
  this.state = {
   username: window.localStorage.getItem('user'),
   comments: props.comments,
   text: ''
  }
 }


 AddedComment = event => {
  event.preventDefault()
  const commentsCopy = Object.assign([], this.state.comments)
  commentsCopy.push({username: this.state.username, text: this.state.text })
  this.setState({
   comments: this.state.comments,
   text: ''
  })
 }

 CommentHandler = event => {
  event.preventDefault()
  this.setState({
   text: event.target.value 
  })
 }

 render(){
  return(
   <div>
   {this.state.comments.map((item, index) => <Comment key={index}
    username={item.username} 
    text={item.text}
   />)}
   </div>
  )
 }
}
   

export default CommentSection