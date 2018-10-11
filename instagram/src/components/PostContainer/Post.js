import React from 'react'
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection'
import PropType from 'prop-types';
import { PostHeader, PostFooter, PostImg} from './PostParts';


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
          comments={this.props.postData.comments}
          timestamp={this.props.postData.timestamp}
        />
      </div>
    )
  }
}

Post.PropType = {
  postData: PropType.shape({
    username: PropType.string,
    likes: PropType.number,
    timestamp: PropType.string,
    thumbnailUrl: PropType.string,
    imageUrl: PropType.string,
    comments: PropType.arrayOf(PropType.shape({
      text: PropType.string,
      username: PropType.string
    }))
  })
}
export default Post;