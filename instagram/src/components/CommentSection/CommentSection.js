import React, { Component } from 'react';
import './CommentSection.css';
import styled from 'styled-components';

//newComment holds comment that is made to one of the instagram posts; count is the numbrer of likes
//for a given post
let newComment;
let count = 0;

const CommentSectionContainer = styled.div``;
const Comment = styled.div`
  text-decoration:none;
  display:flex;
  align-items:center;
`;
const Heart = styled.i`
  margin-left: 6%;
`;
const CommentForm = styled.form``;

const Count = styled.div`
  margin-left:6%;
  margin-top:7px;
  font-weight:bold;
`;
const PostReactions = styled.div`
  margin-right:0;
  margin-top:10px;
  padding-right:0;
  display:flex;
  flex-direction: column;
  align-items:flex-start;
`;
const CommentText = styled.div`
  margin: 5px 0 5px 1%;
`;
const UserName = styled.strong``;
const CommentBox = styled.input`
  width:93%;
  height:50px;
  padding-left:6%;
  font-size:15px;
  font-weight:heavier;
`;
const CommentSubmit = styled.input`
  display:none;
`;

class CommentSection extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentComment: "",
      comments: [...props.comments],
      count:count,
      thisUserClicked: false
    }
  }
  getNewComment = (event, index)=>{
    newComment = event.target.value;
    this.setState(prevState => ({currentComment: newComment}))
  }
  addNewComment = (e)=>{
    e.preventDefault();
    this.setState(prevState =>({
      comments: [{username: 'User', text: newComment},...prevState.comments]
    }), ()=>{this.setState(prevState =>({currentComment: ""}))})
    localStorage.setItem("comments", this.state.comments);
  }
  addLike = (e) =>{
    if(!this.state.thisUserClicked){
    count+=1;
    this.setState(prevState => ({count: count, thisUserClicked: true}));}
    else{
      count -=1;
      this.setState(prevState =>({count: count, thisUserClicked: false}))
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState(nextProps)
  }
  render(){
    return(
      <CommentSectionContainer>
      <PostReactions>
        <Heart onClick = {()=>{this.addLike()}} className="heart-size fa">
          &#xf08a;
        </Heart>
        <Count>{this.state.count} likes</Count>
      </PostReactions>
        <ul>
        {this.state.comments.map(comment =>{
          return <Comment>
                  <UserName>{comment.username}</UserName> <CommentText>{comment.text}</CommentText>
                 </Comment>})}
        </ul>
        <CommentForm onSubmit = {this.addNewComment}>
          <CommentBox placeholder = "Add Comment..." onChange = {this.getNewComment} type = "text" name = "comment" value = {this.state.currentComment} />
          <CommentSubmit type = "submit" value = "Submit " />
        </CommentForm>
      </CommentSectionContainer>
    );
  };
}

export default CommentSection;
