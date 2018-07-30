import React, { Component } from 'react';
import './PostContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentSection from '../CommentSection/CommentSection';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {currentComment: '', currentUser: 'Bobby123'};
    }

    commentHolder = (event) => {
        this.setState({ currentComment: event.target.value });
    }

    addComment = (event, prevState) => {
        event.preventDefault();
        let comment = this.state.currentComment;
        let user = this.state.currentUser;
        console.log(comment, user);
    }

    render() {
        return (
            <div className="post" key={this.props.post.timestamp}>
                <div className="header row">
                    <div className="col-sm-12 d-flex">
                        <img src={this.props.post.thumbnailUrl} alt="thumbnail of user" />
                        <p className="username">{this.props.post.username}</p>
                    </div>
                </div>
                <img src={this.props.post.imageUrl} alt="user's beautiful post" />
                <div className="bottom">
                    <div className="icons">
                        <FontAwesomeIcon icon={['far', 'heart']} className="icon" />
                        <FontAwesomeIcon icon={['far', 'comment']} className="icon" />
                    </div>
                    <p>{this.props.post.likes} likes</p>
                    <CommentSection comments={this.props.post.comments} />
                    <form onSubmit={this.addComment}>
                        <input type="text" placeholder="Add a comment" onChange={this.commentHolder} ></input>
                    </form>
                    <p>{this.props.post.timestamp}</p>
                </div>
            </div>
        );
    }
}

export default Post;