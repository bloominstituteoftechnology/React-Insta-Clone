import React, { Component} from 'react'
import CommentCard from '../CommentSection/CommentCard';

class PostCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.data.likes
    };
  }

  // handleToggleLike = (text) => {
    
  //   // let likes = this.state.likes;
    
  //   this.setState(prevState => (
  //     {
  //       likes: prevState.likes.map(post => {
  //         if (text === post.text) {
  //           return {
  //             ...post,
  //             likes: post.likes + 1
  //           }
  //         }
  //       })
  //     }
  //   ))
  // }

  
  toggleLike = (e) => {
    // console.log("EVENT", e);
    if(e.target.classList.contains('liked')){
      e.target.classList.toggle('liked');
      let likes = this.state.likes - 1;
      this.setState({ likes });
    }
    else {e.target.classList.toggle('liked');
    let likes = this.state.likes + 1;
    this.setState({ likes })}
  };
  
  render () {
    console.log("POSTCARD PROPS", this.props);
    return (
      <div className="post-card">
        <div className="post-card__header">
          <img
            className="post-avatar"
            src={this.props.data.thumbnailUrl}
            alt="user avatar"
          />
          <p>{this.props.data.username}</p>
        </div>
        <img 
          className="post-card__img"
          src={this.props.data.imageUrl}
          alt="user post"
        />
        <div 
          className="social-container"
          key="socialContainer"
          >
          <i 
            className="far fa-heart"
            onClick={this.toggleLike}
          ></i>
          <i className="far fa-comment"></i>
        </div>
        <p>{this.state.likes} likes</p>
        <CommentCard 
          id={this.props.id}
          comments={this.props.data.comments}
          timestamp={this.props.data.timestamp}
        />
      </div>
    )
  }
}

export default PostCard
