import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import './post.css';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: []
        }
    }

    componentDidMount() {
        this.setState({post: this.props.post, comments: this.props.post.comments});
    }

    render() {
        return (
            <div className='Post'>
                <div className='Post__heading'>
                    <img className='Post__thumbnail' src={this.state.post.thumbnailUrl} alt=""/>
                    <div>{this.state.post.username}</div>
                </div>
                <img className='Post__image' src={this.state.post.imageUrl} alt=""/>
                <div>heartIcon commentIcon</div>
                <div>{this.state.post.likes} likes</div>
                <CommentSection />
                <div>{this.state.post.timestamp}</div>
            </div>
        )
    }
}

export default Post;