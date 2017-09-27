import React, { Component }  from 'react';
import CommentSection from './CommentSection.js'
import './PostContainer.css';

class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      post: {},
      liked: false
    }
    this.toggleLikes = this.toggleLikes.bind(this);
  }

  componentDidMount() {
    this.setState({
      post: this.props.postData
    });
  }

  toggleLikes(){
    if(!this.state.liked){
      this.state.post.likes++;
      this.setState({post: this.state.post,
                    liked: !this.state.liked 
      });    
    } else if(this.state.liked){
      this.state.post.likes--;
      this.setState({post: this.state.post,
                    liked: !this.state.liked 
      });    
    }
  }

  render() {
    return (
      <div className="post title">
        <div>
          <img alt="thumbnail" className="thumbnail" src={this.state.post.thumbnailUrl} />
                   <span className="username"> {this.state.post.username} </span> 
        </div>
        <img alt="" className="pic" src={this.state.post.imageUrl} />
        <p> <i onClick={() => this.toggleLikes()} className={!this.state.liked ? "fa fa-heart-o fa-2x" : "fa fa-heart fa-2x"}  aria-hidden="true"></i>
            <i className="fa fa-comment-o fa-2x" aria-hidden="true"></i> 
        </p>
        <p className="likes"> {this.state.post.likes} likes </p>
        <CommentSection comments={this.props.postData.comments} timestamp={this.props.postData.timestamp}/> 
      </div>
    );  
  }
}

export default PostContainer;