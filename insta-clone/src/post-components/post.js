import React from 'react'
import CommentSection from "../comment-components/commentSection"
import likebutton from "../imgs/like-button.png"
import likedbutton from "../imgs/liked-button.png"
import commentbutton from "../imgs/comment-button.png"

class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      comments: this.props.data.comments,
      thumbnailUrl: this.props.data.thumbnailUrl,
      imageUrl: this.props.data.imageUrl,
      username: this.props.data.username,
      likes: this.props.data.likes,
      liked: `${this.props.data.likes} likes`,
      likeOn: "like",
      likeOff: "hidden",
      search: this.props.search
    }
  }

  addLike = e => {
    let liked = `you and ${this.state.likes} others like this`;
    this.setState({liked})
    this.setState({likeOn: "hidden"})
    this.setState({likeOff: "like little-low"})
  }

  removeLike = e => {
    let liked = `${this.props.data.likes} likes`;
    this.setState({liked})
    this.setState({likeOn: "like"})
    this.setState({likeOff: "hidden"})
  }

  render() {
    let username = this.state.username;
    if (username.includes(this.state.search)) {
  return (
    <div className="post">
      <div className="post-header">
        <img src={this.state.thumbnailUrl} alt="thumbnail"></img>
        <span>{this.state.username}</span>
      </div>
      <div className="post-body">
        <img className="post-img" src={this.state.imageUrl} alt="posted"></img>
        <div className="buttons">
          <span className={this.state.likeOn}><img src={likebutton} alt="like button" onClick={this.addLike} /></span>
          <span className={this.state.likeOff}><img src={likedbutton} alt="liked button" onClick={this.removeLike} /></span>
          <span className="comment-button"><img src={commentbutton} alt="comment button" /></span>
        </div>
        <span className="likes">{this.state.liked}</span>
        <CommentSection data={this.state.comments} />
      </div>
    </div>
  )
} else {
  return null;
}
}
}

export default Post;
