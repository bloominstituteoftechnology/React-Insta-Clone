import React from 'react';
import './Post.css';
import Comments from '../CommentSection/Comments';

class Post extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      data: this.props.data,
      likes:this.props.data.likes,
    }
  }

  render(){
    const user = this.state.data;
    return (
      <div className="user_post">
        <div className="userInfo">
            <img className="user_icon" alt="user_icon" src={user.thumbnailUrl} />
          <div>
            <h2> {user.username} </h2>
          </div>
        </div>
        <div>
          <img className="post_image" alt="user_post" src={user.imageUrl} />
        </div>
        <div className="interaction_container">
          <img className="user_interaction" alt="likes" src="./../img/heart.png" />
          <img className="user_interaction" alt="comment" src="./../img/message.png" />
        </div>
        <div className="interaction_container">
          <p>{user.likes} likes </p>
        </div>
        <Comments comments = {user.comments} time={user.timestamp}/>
      </div>
    )
  }
}

export default Post;
