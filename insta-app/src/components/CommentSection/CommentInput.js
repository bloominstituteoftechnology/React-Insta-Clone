import React from "react";
import PropTypes from "prop-types";
import CommentSection from "./CommentSection";
import Comment from "./Comment";
import styled from "styled-components"; 

const ImgIcons = styled.div`
display: flex; 
flex-direction: row; 
justify-content: space-between;
width:auto; 
`
const ImgIconLeft = styled.div`
margin: 5px 0; 
display: flex; 
align-items: center; 
`
const ImgIconRight = styled.div`
margin: 5px 0; 
display: flex; 
align-items: center; 
`
const Itag = styled.i`
margin: 0 10px; 
cursor: pointer;
`
const Likes = styled.div`
font-size: 12px;
margin-left: 10px;  
margin: 10px 0; 
font-weight: 700; 
` 

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      added: "", 
      likes: props.likes, 
    };
  }
  addComment = i =>{
      i.preventDefault(); 
      const comments = this.state.comments.slice(); 
      comments.push({
      text:this.state.added, 
      username: "bob", 
      })
      this.setState({comments, added: ""})
  }
 changeComment = e => this.setState({
     added: e.target.value
 })
 likeBtn = l =>{
   l.preventDefault; 
   const likes = this.state.likes +1; 
   this.setState({likes}); 
 }
  render() {
    return (
      <div>
        <ImgIcons>
        <ImgIconLeft>
            <Itag onClick={this.likeBtn}className="far fa-heart" />
            <Itag className="far fa-comment" />
            <Itag className="fas fa-paper-plane" />
        </ImgIconLeft>
        <ImgIconRight>
            <Itag className="far fa-bookmark" />
        </ImgIconRight>
        </ImgIcons>
        <Likes>{this.state.likes} likes</Likes>
        <CommentSection 
        comments={this.state.comments} />
        <Comment
        handleSubmitBtn={this.addComment}
        value={this.state.added}
        handleChangeComment={this.changeComment} />
      </div>
    );
  }
}
CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentInput;
