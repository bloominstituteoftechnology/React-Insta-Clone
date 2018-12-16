
import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';


const PostsContainer = props => {
  return (
    <div className="post-container-wrapper">
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>
  );
};



/////////////////////////////////////////////////////

class Post extends React.Component{
  constructor(props){
      super(props);
      this.state={
          likes: props.post.likes
      }
  }
  incrementLikes = () => {
      let likes = this.state.likes +1;
      this.setState({ likes});
  }
  render(){
    return (
        <div className="post">
          <div className="post-header">
            <div className="thumb-wrapper">
              <img src={this.props.post.thumbnailUrl} alt='' className='post-thumb' />
            </div>
            <h1 className="post-username">{this.props.post.username}</h1>
          </div>
              
          <div>
            <img className="post-image" src={this.props.post.imageUrl} alt="" />
            <div className="comment-bottom">
              <div className = "like-bar">
                <p className='likes'>{this.state.likes} likes</p>
                <p className='heart-emoji' onClick ={this.incrementLikes}>♡ </p>
                <p>💬</p>
              </div>
          </div>
          </div>
        <CommentSection comments={this.props.post.comments} />
        </div>

      )
      }
}


export default PostsContainer;