import React from 'react';
import './PostContainer.css';
import dummyData from '../../DummyData';
// import CommentSection from './CommentSection';

class PostContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        thumbnailUrl: "",
        username: "",
        imageUrl: "",
        likes: 0,
        timestamp: "",
        comments: []
      }
    }

render() {
    return (
    <div className="post-container">
    <div className="post-header">
     <img src={this.thumbnailUrl} alt="User Thumbnail"/>
     <h1>{this.username}</h1>
     </div>
     <div className="post-main">
             <div className="post-content" key={this.id}>
             {this.imageUrl} {this.text}
         </div>
        )}
     {/* <img className="post-image" src={this.props.image} alt="Main Post"/> */}
           </div>           
    <div className="post-likes">
      {this.likes} likes
         </div>
     {/* <CommentSection comments={this.props.comments} date={this.props.timestamp} id={this.props.id}/> */}

</div>
    );
}
}

export default PostContainer;