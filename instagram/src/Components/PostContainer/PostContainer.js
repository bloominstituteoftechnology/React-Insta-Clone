import React from 'react'
import "./PostContainer.css"
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types'; 

class PostContainer extends React.Component {
   constructor(props){
       super(props); 
        this.state = {
            usernameImg: props.usernameImg,
            username : props.username,
            img: props.img, 
            likes: props.likes,
            comments: props.comments, 
            timeStamp: props.timeStamp
        }
   } 
  
   increaseLikeHandler = (event) => {
    this.setState(prevState =>{
      return {
        likes: prevState.likes + 1
      }
    })
    }
  
    render (){
    return (
    <div className = "postContainer">
        <div  className = "username">
            <img src = {this.state.usernameImg} alt = "User Picture" width = "40px" height = "40px"/>
            <h4>{this.state.username}</h4>
        </div>
        <div className = "userImage">
            <img src = {this.state.img}/>    
        </div>
        <div className = "commentsLikes">
            <div className = 'icons'>
                <i onClick = {this.increaseLikeHandler} className = "far fa-heart fa-2x"></i>
                <i className="far fa-comment fa-2x"></i>
            </div>
            <p className = "likes">{this.state.likes} likes</p>
        </div>
        <div className = "comments">
            <CommentSection comments = {this.state.comments} 
                            timeStamp = {this.state.timeStamp}/>
        </div>

    </div>
    )
  }
}

PostContainer.propTypes = {
    usernameImg : PropTypes.string, 
    username : PropTypes.string, 
    img: PropTypes.string, 
    likes: PropTypes.number,
    timeStamp: PropTypes.string, 
    comments : PropTypes.arrayOf(PropTypes.object),
}

export default PostContainer; 