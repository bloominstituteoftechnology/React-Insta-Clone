import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PostHeader from '../PostContainer/PostHeader.js';



class Posts extends Component {
  constructor(props){
    super(props);
    this.state = {
       posts: props.posts,

       likeCount: 0
    };
  }
  
addLike = () => {
  this.setState(prevState => ({
    likeCount: prevState.likeCount + 1
  }));
}


  render(){
    console.log('posts rendering', this.state.posts);
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
          <i onClick={this.addLike} 
          likeCount={this.state.likeCount} 
          class="far fa-heart">{this.state.likeCount}</i>
     </div>
     </div>
        <CommentSection comments={this.state.posts.comments}/>
    </div>
   );
  }
};


export default Posts;
