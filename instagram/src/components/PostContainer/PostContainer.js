import React, { Component } from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection.js';

class PostContainer extends React.Component {

    checkLikes () {
        if (this.props.postInfo.likes === 1) {
            return (
                <p>{this.props.postInfo.likes} like</p>
            )
        }
        else {
            return (
                <p>{this.props.postInfo.likes} likes</p>
            )
        }
    }

    render () {
        let data = this.props.postInfo; 

        return (
            <div>
                <img src={data.thumbnailUrl}/>
                <p>{data.username}</p>
                <img src={data.imageUrl}/>
                <i class="far fa-heart fa-2x"></i>
                <i class="far fa-share-square fa-2x"></i>
                {this.checkLikes()}
                {data.comments.map(comment => {
                    return (
                        <CommentSection comment={comment}/>
                    )
                })}
            </div>
        )
    }
}

export default PostContainer;