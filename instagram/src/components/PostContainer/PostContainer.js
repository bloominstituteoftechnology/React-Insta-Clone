import './PostContainer.css';
import React from 'react';
import PropType from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faHeart);
library.add(faCommentAlt);

class PostContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            stateComments: [],
            commentInput: {},
            likes: this.props.dummyData.likes
          }
          this.inputHandler = this.inputHandler.bind(this);
          this.addNewComment = this.addNewComment.bind(this);
          this.addLike = this.addLike.bind(this);
    } 

     
  addLike(){
      this.setState({likes: this.state.likes += 1})
  }

  inputHandler(event){
    let username = 'JoeSCMHOE126';  
    this.setState({
        commentInput: {
            text: event.target.value,
            id: Date.now(),
            username: username

      }
    })
  }
  addNewComment(event) {
    event.preventDefault();
    this.setState({
      stateComments: [...this.state.stateComments, this.state.commentInput],
      commentInput: {text: ''}
    });
    
  }



render(){
    return (
        
        
            
                
                <div className={`post-container ${this.props.dummyData.username}`}>
                    <div className = 'post-header'>
                        <img className="post-profile-img" src={`${this.props.dummyData.thumbnailUrl}`}/>
                        <p className='username bold-txt'>{this.props.dummyData.username}</p>
                    </div>
                    <img className="post-img"src={`${this.props.dummyData.imageUrl}`}/>
                    <div className='like-container'>
                        <div className="icon-cont">
                            <FontAwesomeIcon onClick={this.addLike}icon="heart" />
                            <FontAwesomeIcon icon="comment-alt" />
                        </div>
                        <div className='bold-txt'>
                            {this.state.likes} likes 
                        </div>
                        <CommentSection comments={this.props.dummyData.comments} 
                                        stateComments={this.state.stateComments}
                                        inputHandler={this.inputHandler}
                                        addNewComment={this.addNewComment}
                                        commentInput={this.state.commentInput}/>
                    </div>
                    

                </div>
                
                )
                
        
        
    

        }
}


export default PostContainer;