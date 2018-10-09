import React from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'

const PostHeader = (props) => {
  return (
    <div className="post-header">
      <div className="thumbnail">
        <img 
          src={props.thumbnailUrl} 
          alt={props.username}
        />
      </div>
      <div className="name">
        {props.username}
      </div> 
    </div>
  )
}

const PostImg = (props) => {
  return (
    <div className="post-img">
      <img 
        src={props.imgUrl}
        alt={props.username}
      />
    </div>
  )
}

const PostFooter = (props) => {
  return (
    <div className="post-footer">
      <div className="likes">
        {props.likes} likes
      </div>
    </div>
  )
}

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
    }
  }
  render() {
    return (
      <div className="Post">
        <PostHeader 
          username={this.props.postData.username}
          thumbnailUrl={this.props.postData.thumbnailUrl}
        />
        <PostImg 
          imgUrl={this.props.postData.imageUrl} 
          username={this.props.postData.username}
         />
        <PostFooter
          likes={this.props.postData.likes}
        />
        <CommentSection 
          comments={this.props.postData.comments}/>
      </div>
    )
  }
}
export default Post;