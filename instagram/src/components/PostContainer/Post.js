import React, { Component } from 'react';
import PostHeader from "./PostHeader";
import LikeSection from "./LikeSection";
import CommentSection from "../CommentSection/CommentSection";
/*
Passed as props from PostContainer.js

key={ p.imageUrl } 
post={p}

*/
class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        }
    }

    incrementLikes = () => {
        const likeAdd = this.state.likes += 1
        this.setState({
            likes: likeAdd
        })
    }

    render() {
        return(
            <div className="post-container">
                <PostHeader 
                    username = {this.props.post.username}
                    thumbnailUrl = {this.props.post.thumbnailUrl}
                />

                <div className="post">
                    <img className="post-image" src={this.props.post.imageUrl} alt="user posted" />
                </div>

                <div className="comment-section-wrapper">

                    <LikeSection 
                        likes = {this.state.likes}
                        incrementLikes = {this.incrementLikes} 
                    />

                    <CommentSection
                        postKey = {this.props.post.imageUrl} 
                        comments = {this.props.post.comments}
                    />

                </div>
            </div>
        )
    }
}

export default Post