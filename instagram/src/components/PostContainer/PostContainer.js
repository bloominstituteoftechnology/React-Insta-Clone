import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection'


class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            likes: props.likes,
            newComment: '',
        };
    }

    render() {
        return (
            <div className = 'PostContainer'>
            <div className = 'Post_likes'> 
                {this.state.likes} likes
                <CommentSection comments= {this.state.comments} />
            </div>
            </div>
        )
    }
}

function Comment(props) {
    return(
        <div className='CommentSection__comment'>
            <span className='CommentSection__username'>{props.username} </span>
            {props.text}
        </div>
        );
    }

export default PostContainer;

