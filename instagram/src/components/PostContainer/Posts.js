import React, { Component } from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import Comments from "../CommentSection/Comments";
import heartOutline from"../../images/heartOutline.png";
import comment from"../../images/comment.png";
import'./Post.css';

class Posts extends Component {
  state = {  }
  render() { 
    console.log(this.props)
    return (  
      <div className="container">
        <div className="post-lists">
          {this.props.posts.map(post => {
              return[
                <div className="post-container">
                <div className="post-header">
                  <img  className ="round" src={post.thumbnailUrl} alt="thumbnail"/>
                  <h3>{post.username}</h3>
                </div>
                <div className="post-body">
                  <img src={post.imageUrl} alt="post"/>
                </div>
                <div className="post-icon">
                  <img src={heartOutline} alt="heart"/>
                  <img src={comment} alt="comment"/>
                </div>
                <p className="likes">{post.likes} likes</p>
                <>
                  <Comments comments={post.comments} />
                </>
                  <div className="form-container">
                    <Moment className="timestamps"fromNow ago>2018-09-20</Moment>
                    <form>
                      <input type="text" placeholder="add comment ..."/>
                    </form>
                  </div>
                </div>
              ] 
            })}
        </div>
      </div>
    );
  }
}

Posts.PropTypes ={
  posts:PropTypes.arrayOf(PropTypes.shape({
    username:PropTypes.string,
    thumbnailUrl:PropTypes.string,
    imageUrl:PropTypes.string,
    comments :PropTypes.array
  }))
}

 
export default Posts;