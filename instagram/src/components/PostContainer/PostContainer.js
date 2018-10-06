import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js';
import PropTypes from 'prop-types';

class PostContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            post: {},
            likes: 0
        }
    }

    componentDidMount() {
        this.setState({
            post: this.props.postInfo,
            likes: this.props.postInfo.likes
        })
    }

    //determine whether there are multiples "likes" or a single "like"

    checkLikes () {
        if (this.state.likes === 1) {
            return (
                <p className='likes'>1 like</p>
            )
        }
        else {
            return (
                <p className='likes'>{this.state.likes} likes</p>
            )
        }
    }

    //like a post

    likePost = (e) => {
        e.preventDefault();
        let likes = this.state.post.likes;
        this.setState({
            likes: likes + 1
        })
    }

    render () {
        return (
            <div className='post-container'>
                {/* post header */}
                <div className='post-header'>
                    <img src={this.state.post.thumbnailUrl} className='thumbnail'/>
                    <p className='username'>{this.state.post.username}</p>
                </div>
                {/* image */}
                <img src={this.state.post.imageUrl}/>
                {/* like and comment buttons */}
                <div className='post-options'>
                    <div>
                        <i 
                            className="far fa-heart fa-2x post"
                            onClick={this.likePost}>
                        </i>
                        <i className="far fa-comment fa-2x"></i>
                    </div>
                    {this.checkLikes()}
                    <CommentSection data={this.props.postInfo}/>
                </div>
            </div>
        )
    }
}

PostContainer.propTypes = {
    postInfo: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number
    }),
}

export default PostContainer;