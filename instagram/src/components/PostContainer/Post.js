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
            <div className='Post'> {/* !! need font modifier for all children? */}
                <div className='Post__heading'> {/* !! definitely need heavier font-weight modifier for headings */}
                    <img className='Post__thumbnail' src={this.state.post.thumbnailUrl} alt=""/>
                    <div>{this.state.post.username}</div>
                </div>
                <img className='Post__image' src={this.state.post.imageUrl} alt=""/>
                <div>heartIcon commentIcon</div> {/* !! will need className for positioning, still need actual icons */}
                <div>{this.state.post.likes} likes</div> {/* !! may need className for positioning */}
                <CommentSection comments={this.state.comments}/> {/* !! may need className for text-wrap, etc? */}
                <div>{this.state.post.timestamp}</div> {/* !! may need className for format */}
            </div>
        )
    }
}

export default Post;