import React, { Component } from "react";
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

class PostContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //putting likes in state because if the post is liked, this number needs to increase, liked will be used to toggled color of heart
      likes: this.props.posts.likes,
      liked: false,
    };      
  }

  // I don't think i need to do this?
  // componentDidMount() {
  //   this.setState({ post: this.props })
  // }
  
  render() {
    // console.log("This is the prop: ",this.props);
    // console.log("This is the post in state: ",this.state);
    const username = this.props.posts.username;
    const likes = this.state.likes;
    const thumbNail = this.props.posts.thumbnailUrl;
    const imageUrl = this.props.posts.imageUrl;
    const timeStamp = this.props.posts.timestamp;
    const comments = this.props.posts.comments;
    return(
      <div>
        <PostBody username={username}
          likes={likes}
          thumbNail={thumbNail}
          imageUrl = {imageUrl}
          timeStamp = {timeStamp}
          comments = {comments}
        />
      </div>
    )
  };
}



const PostBody = props => {
  return (
    <div className="card">
      {/* {props["user"]} {props["likes"]} */}
      <div className="icon-container">
        <img className="logo" src={props["thumbNail"]} alt="something meaningful"/>
      </div>
      <div>
        {props["username"]}
      </div>
      <div className="image-container">
        <img className="image" src={props["imageUrl"]} alt="something meaningful"/>
      </div>
      <div>
        (Heart)  (Message bubble)
      </div>
      <div>
        {props.likes} likes
      </div>
      <div>
        {props.comments.map(comment => {
          console.log(comment)
          return <div key={comment.username + comment.text}><CommentSection comments={comment}/></div>
        })}
      </div>
    </div>
  )
};









export default PostContainer; 