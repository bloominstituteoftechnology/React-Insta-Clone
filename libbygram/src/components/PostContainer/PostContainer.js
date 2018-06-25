import React from 'react';
import './PostContainer.css';
import dummyData from '../../DummyData';
// import CommentSection from './CommentSection';

const PostContainer = props => {
    return (
<div className="post-container">
<div className="post-header">
     <img src={this.props.thumbnailUrl} alt="User Thumbnail"/>
     <h1>{this.props.username}</h1>
     </div>
     <div className="post-main">
     {this.props.post.map(post => {
         return (
             <div className="post-content" key={this.props.id}>
             {this.props.imageUrl} {this.props.text}
         </div>
         )
        })}
     {/* <img className="post-image" src={this.props.image} alt="Main Post"/> */}
           </div>           
    <div className="post-likes">
      {this.props.likes} likes
         </div>
     {/* <CommentSection comments={this.props.comments} date={this.props.timestamp} id={this.props.id}/> */}

</div>
    );
}


export default PostContainer;