import React from 'react'
import "./PostContainer.css"
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types'; 

class PostContainer extends React.Component {
   constructor(props){
       super(props); 
        this.state = { 
            likes: props.likes,
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
            <img src = {this.props.usernameImg} alt = "User Picture" width = "40px" height = "40px"/>
            <h4>{this.props.username}</h4>
        </div>
        <div className = "userImage">
            <img src = {this.props.img}/>    
        </div>
        <div className = "commentsLikes">
            <div className = 'icons'>
                <i onClick = {this.increaseLikeHandler} className = "far fa-heart fa-2x"></i>
                <i className="far fa-comment fa-2x"></i>
            </div>
            <p className = "likes">{this.state.likes} likes</p>
        </div>
        <div className = "comments">
            <CommentSection comments = {this.props.comments} 
                            timeStamp = {this.props.timeStamp}/>
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