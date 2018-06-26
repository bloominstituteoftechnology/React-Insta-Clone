import React, {Component} from 'react';
import './PostContainer.css';
import dummyData from '../../DummyData';
import CommentSection from '../CommentSection/CommentSection';
import Comment from '../CommentSection/Comment';

class PostContainer extends React.Component {
    constructor() {
      super();
      this.state = {
        username: "",
        thumbnailUrl: "",
        imageUrl: "",
        likes: 0,
        timestamp: "",
        comments: []
      };
    }

componentDidMount() {
    this.setState({
        username: dummyData.map(i => i.username),
        thumbnailUrl: dummyData.map(i => i.thumbnailUrl),
        imageUrl: dummyData.map(i => i.imageUrl),
        likes: dummyData.map(i => i.likes),
        timestamp: dummyData.map(i => i.timestamp),
        comments: dummyData.map(i => i.comments)
    })
}

render() {
    return (
        dummyData.map(i => {
            return ( 
    <div className="post-container">
    <div className="post-header">
     <img src={i.thumbnailUrl} alt="User Thumbnail"/>
     <h1>{i.username}</h1>
     </div>
    <div className="post-img">
        <img src={i.imageUrl} alt="Post Image" />
        </div>
        <p className="post-icons">
        <i className="fa fa-heart" />
        <i className="far fa-comment" />
    <p className="post-likes">{i.likes}</p>
    </p>
    <CommentSection comments={i.comments}  />
    <p className="post-timestamp">{i.timestamp}</p>
    <Comment />
</div>
    );
})
);
}
}

export default PostContainer;