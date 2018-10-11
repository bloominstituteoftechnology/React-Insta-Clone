import './PostContainer.css';
import React from 'react';
import PropType from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import styled, {css} from "styled-components";
library.add(faHeart);
library.add(faCommentAlt);

const PostProfImg = styled.img`
    width: 40px;
    height: auto;
    content: url('${props => props.src}');
    border-radius: 50%;
    padding: 0 5px;
`;

export const Username = styled.span`
    font-weight: 700;
    user-select: none;
    ${props => props.comment ? css`
    font-weight: 620;
    padding-right: 5px;
    ` : null}

`;



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
    let username = localStorage.getItem('username');  
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
                        <PostProfImg src={this.props.dummyData.thumbnailUrl}/>
                        <Username>{this.props.dummyData.username}</Username>
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