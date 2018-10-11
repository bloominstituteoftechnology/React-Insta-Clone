import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import CommentButton from './CommentButton';
import LikeButton from '../SearchBar/LikeButton';
import './postcontainer.css';
import PropTypes from "prop-types";

class PostContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          posts : [],
          likes: props.post.likes
        }
      }

      addLike = () => {
        this.setState ({
            likes: this.state.likes + 1
        })
    }

      render() {

      return (
        <div className = "postBody">
            <div>
                <div className = "profileHead">
                    <img className = "profilePick" alt="''" src={this.props.post.thumbnailUrl} ></img>
                    <h2>{this.props.post.username}</h2>
                </div>
           
                <div>
                    <img className = "this.props.postImg" alt="''" src={this.props.post.imageUrl} />
                </div>
                
                <div className = "this.props.postIcons">
                    <LikeButton addLike = {this.addLike} />
                    <CommentButton />
                </div>

                <div className = "likeContainer">       
                    <h3>{this.state.likes} Likes</h3>  
                </div>
                    <CommentSection 
                    comments={this.props.post.comments}
                    timestring={this.props.post.timestamp}
                    />
            </div>  
        </div>
      );
    }
}
  
  PostContainer.propTypes = {
    post: PropTypes.shape({
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            imageUrl:PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments:PropTypes.string,
            text: PropTypes.string,
          })
    }.isRequired
  
  
  export default PostContainer ;