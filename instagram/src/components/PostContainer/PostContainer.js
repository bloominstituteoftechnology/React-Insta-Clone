import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import CommentButton from './CommentButton';
import LikeButton from '../SearchBar/LikeButton';
import './postcontainer.css'

class PostContainer extends Component {
    constructor(){
        super()
    }

    render() {
      return (
        <div className = "postBody">
        {this.props.posts.map((post, index) =>{
            return(<div key={index}>
                <div className = "profileHead">
                    <img className = "profilePick" src={post.thumbnailUrl} ></img>
                    <h2>{post.username}</h2>
                </div>
           
                <div>
                    <img className = "postImg" src={post.imageUrl} />
                </div>
                
                <div className = "postIcons">
                    <LikeButton />
                    <CommentButton />
                </div>

                <div className = "likeContainer">       
                    <h3>{post.likes} Likes</h3>  
                </div>
                    <CommentSection 
                    Comments={post.comments}
                    timestring={post.timestamp}
                    />
                </div>)  
        })}
        </div>
      );
    }
  }
  
  export default PostContainer ;