import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js';
import PropTypes from 'prop-types';

class PostContainer extends React.Component {

    checkLikes () {
        if (this.props.postInfo.likes === 1) {
            return (
                <p className='likes'>1 like</p>
            )
        }
        else {
            return (
                <p className='likes'>{this.props.postInfo.likes} likes</p>
            )
        }
    }

    render () {
        let data = this.props.postInfo; 

        return (
            <div className='post-container'>
                {/* post header */}
                <div className='post-header'>
                    <img src={data.thumbnailUrl} className='thumbnail'/>
                    <p className='username'>{data.username}</p>
                </div>
                {/* image */}
                <img src={data.imageUrl}/>
                {/* like and comment buttons */}
                <div className='post-options'>
                    <div>
                        <i className="far fa-heart fa-2x post"></i>
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
    likes: PropTypes.number
}

export default PostContainer;