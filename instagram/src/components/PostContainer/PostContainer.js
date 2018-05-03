import React from 'react';
import ReactDOM from 'react-dom';
import './PostContainer.css';
import heart from '../assets/heart.png';
import comment from '../assets/comment.png';
import CommentSection from '../CommentSection/CommentSection.js';

class PostContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            likes: undefined,
            timestamp: "",
            comments: []
        }
    }
    return() {
        return (
        <div className="post">
            <div className="post-header">
               <img src={this.props.thumbnailUrl} className="post-profile"/>
               <p>{this.props.username}</p>
            </div>
            <img src={this.props.imageUrl} className="post-img"/>
            <div className="post-bottom">
                <div className="icons-wrapper">
                    <img className="post-icon" src={heart} id="post-heart"/>
                    <img className="post-icon" src={comment} id="post-heart"/>
                </div>
                <p>{this.state.likes}</p>
                <CommentSection 
                comments={this.state.comments}/>

            </div> 
        </div>
    );
}
}

export default PostContainer;