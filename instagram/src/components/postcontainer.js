import React, { Component } from 'react';
import CommentBox from './commentbox';
import './postcontainer.css';
let moment = require('moment');

class PostContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: props.data.username,
            thumbnailUrl: '',
            imageUrl: '',
            likes: '',
            timestamp: '',
            comments: props.data.comments
        };
    }

    componentDidMount(){
        this.setState( { 
            thumbnailUrl: this.props.data.thumbnailUrl,
            imageUrl: this.props.data.imageUrl,
            likes: this.props.data.likes,
            timestamp: this.props.data.timestamp,
            comments: this.props.data.comments
        } );
    }

    render() {
        return (
            <div className="postBox">
                <img className="thumbnail" src={this.state.thumbnailUrl} /><p>{this.state.username}</p>
                <img className="image" src={this.state.imageUrl} />
                <p>Like Comment</p>
                <CommentBox data={this.state.comments} />
                {moment(this.state.timestamp, "MMM Do YYYY, HH:mm:ss A").fromNow()}
            </div>
        );
    }
}

export default PostContainer;