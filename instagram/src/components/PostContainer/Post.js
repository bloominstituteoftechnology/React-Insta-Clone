import React, { Component } from 'react';
import './PostContainer.css'

class Post extends Component {
  constructor(props) {
    super(props);
    this.props = props
  }

  onClickHeart = (e) => {
    if(e.target.classList.contains('far')){
      e.target.classList.remove('far')
      e.target.classList.add('fas', 'color-red')
      this.props.updateLikes(true,this.props.postIndex)
    }else {
      e.target.classList.remove('fas', 'color-red')
      e.target.classList.add('far')
      this.props.updateLikes(false,this.props.postIndex)
    }
  }

  render() { 
    return (
      <div className="post">
        <div className="post header">
          <div className="thumbnail">
            <img className="img-fluid" src={this.props.postObj.thumbnailUrl} alt=""/>
          </div> 
          <div className="username">
            <span>{this.props.postObj.username}</span>
          </div>
        </div>
        <div className="post content">
          <div>
            <img className="img-fluid" src={this.props.postObj.imageUrl} alt="" />
          </div>
          <div className="icons">
            <i className="far fa-heart" onClick={(e) => this.onClickHeart(e)}></i>
            <i className="far fa-comment"></i>
          </div> 
          <div className="likes">
            {`${this.props.postObj.likes} likes`}
          </div>
        </div>
      </div>
     )
  }
}
 
export default Post