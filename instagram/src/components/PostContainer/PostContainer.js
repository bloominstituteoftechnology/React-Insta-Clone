import React from 'react';
import './PostContainer.css';
import heart from '../assets/heart.png';
import comment from '../assets/comment.png';
import CommentSection from '../CommentSection/CommentSection.js';
import data from '../../dummy-data.js';

class PostContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            thumbnailUrl: "",
            username: "",
            imageUrl: "",
            likes: 0,
            timestamp: "",
            comments: []
        };
    }

    componentDidMount() {
        this.setState({
            comments: data.map(i => i.comments)
        });
    }
    render() {
        return (

            <div className="post">
                <div className="post-header">
                    <img src={this.state.thumbnailUrl} className="post-profile"/>
                    <p>{this.state.username}</p>
                </div>
                <img src={this.state.imageUrl} className="post-img"/>
                <div className="post-bottom">
                    <div className="icons-wrapper">
                        <a onClick=""><img className="post-icon" src={heart} id="post-heart"/></a>
                        <a onClick=""><img className="post-icon" src={comment} id="post-heart"/></a>
                    </div>
                    <p>{this.state.likes}</p>
                    <CommentSection comments={this.state.comments}/>
                    <p className="post-date">{this.state.timestamp}</p>
                    <div className="comments-divider"></div>
                    <form className="comments-input" onSubmit="">
                        <input type="text" placeholder="Add a comment..."></input>
                        <a className="comments-menu" onClick="">...</a>
                    </form>
                </div>
            </div>
        );
    }
}

export default PostContainer;