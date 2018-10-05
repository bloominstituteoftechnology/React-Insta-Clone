import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js';

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
                    <div className>
                        <i class="far fa-heart fa-2x post"></i>
                        <i class="far fa-comment fa-2x"></i>
                    </div>
                    {this.checkLikes()}
                    {/* comment section */}
                    {data.comments.map(comment => {
                        return (
                            <CommentSection comment={comment}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default PostContainer;