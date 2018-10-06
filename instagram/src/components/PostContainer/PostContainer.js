import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection';

class PostContainer extends Component {
    constructor(){
        super()
    }
    render() {
        console.log(this.props.posts)
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