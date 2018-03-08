import React, { Component } from 'react';
import CommentSection from './CommentSection/CommentSection.js';
import "./PostContainer.css";
import PropTypes from 'prop-types';

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state ={
        post: props.dataArray
    }
  }

  render() {
    return (
      <div>
         <hr/>
        <div className="row my-3">
          <img className="mx-5 rounded-circle img-fluid" src={this.state.post.thumbnailUrl} alt={this.state.post.username}/>
          <div className="font-weight-bold d-flex align-items-center text-uppercase ">{this.state.post.username}</div>
        </div>
        <img className="img-fluid" src={this.state.post.imageUrl} alt=""/>
        <button className="spacer">Like Pic</button>
        <p>{this.state.post.likes} likes</p>
        {this.state.post.comments.map((item, i) => {
          return (<CommentSection  key={this.state.post.comments[i].username + i.toString()} comment={item} />)
        })}
        <p>{this.state.post.timestamp}</p>
        
        <div className="border-top border-bottom border-dark"> 
            <form className="py-2">
                <input type="text" placeholder= "Add a comment..."/>
            </form>
        </div>
      </div>
    )
  }
}

PostContainer.propTypes = {
  dataArray: PropTypes.shape({
    comments: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })),
    imgUrl: PropTypes.string,
    likes: PropTypes.number,
    thumbnailUrl: PropTypes.string,
    timestamp: PropTypes.string,
    username: PropTypes.string
  })
}

export default PostContainer;