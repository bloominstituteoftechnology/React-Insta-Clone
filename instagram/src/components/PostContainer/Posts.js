import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PostHeader from '../PostContainer/PostHeader.js';



class Posts extends Component {
  constructor(props){
    super(props);
    this.state = {
       posts: props.posts
    };
  }
  
  render(){
   return(
    <div>
     <PostHeader 
        username={this.state.posts.username}
        thumbnailUrl={this.state.posts.thumbnailUrl}
     />
     <div>
         <img
            alt="post thubmnail"
            className="post-image"
            src={this.state.posts.imageUrl}
          />
     <div>
       {/* <LikeButton 
         addLikes={this.addLikesHandler}> 
         {this.state.posts.likes}</LikeButton>  */}
     </div>
     </div>
        <CommentSection comments={this.state.posts.comments}/>
    </div>
   );
  }
};


export default Posts;
