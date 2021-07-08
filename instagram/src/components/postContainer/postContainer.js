import React, {Component} from 'react'
import './postContainer.css';
import CommentSection from '../commentSection/commentSection.js';

class PostContainer extends Component {
  render(){
    return(
      <React.Fragment>
        {this.props.posts.map((post, i) => (
          <div key={post+i} className="postContainer">
            <div className='Header'>
              <img className='thumbnail' src={post.thumbnailUrl}/>
              <p>{post.username}</p>
            </div>
            <div>
              <img className='image' src={post.imageUrl}/>
            </div>
            <div className='commentIconContainer'>
              <i className="far fa-heart commentIcon heart"></i>
              <i className="far fa-comment commentIcon"></i>
            </div>
            <div className='likesContainer'>
              <p>{post.likes} likes</p>
            </div>
            <CommentSection {...post}/>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default PostContainer;
