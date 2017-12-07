import React, { Component } from 'react';
import CommentSection from '../commentsection/commentsection';
import './postcontainer.css';


class PostContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            thumbnailUrl: '',
            imageUrl: '',
            likes: '',
            timestamp: '',
            comments: '',
            currentComment: ''
        };
    }

    componentDidMount = () => {
        this.props.data ? this.setState({
            username: this.props.data.username,
            thumbnailUrl: this.props.data.thumbnailUrl,
            imageUrl: this.props.data.imageUrl,
            likes: this.props.data.likes,
            timestamp: this.props.data.timestamp,
            comments: this.props.data.comments
        }) : null;
    }

    render() {
        return (
            <div className="postBox">
                <img className="thumbnail" src={this.state.thumbnailUrl} /><p>{this.state.username}</p>
                <img className="image" src={this.state.imageUrl} />
                <p>Like Comment</p>
                <CommentSection comments={this.state.comments} />

            </div>
        );
    }
}

export default PostContainer;