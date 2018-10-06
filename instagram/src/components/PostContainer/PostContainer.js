import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';
import CommentButton from './CommentButton';
import LikeButton from '../SearchBar/LikeButton';


class PostContainer extends Component {
    constructor(){
        super()
    }

    render() {
      return (
        <ul>{this.props.posts.map((post, index) =>{
            return(<div key={index}>
                <div>
                    <img src={post.thumbnailUrl} ></img>
                    <h2>{post.username}</h2>
                </div>
           
                <div>
                    <img src={post.imageUrl} />
                </div>
                
                <div>
                    <LikeButton />
                    <CommentButton />
                </div>

                <div>       
                    <span>{post.likes} <strong>Likes</strong></span>
                    <span>{post.comments.length} <strong>Comments ...</strong></span>
                </div>
                    <CommentSection 
                    Comments={post.comments}
                    timestring={post.timestamp}
                    />
                </div>)  
        })}
        </ul>
      );
    }
  }
  
  export default PostContainer ;