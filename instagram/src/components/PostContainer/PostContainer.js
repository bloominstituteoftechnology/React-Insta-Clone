import React, { Component } from 'react';

import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';


class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.post.username,
            likes: props.post.likes,
            comments: props.post.comments
        };
    }

    render() {
        return (
            <div className= 'PostContainer'>
                <div className="PostContainer__Header"> 
                     <img 
                        src="https://instagram.fbna1-1.fna.fbcdn.net/vp/51d5b37438ae3a47df37b7ed3fda141f/5B4ABAA7/t51.2885-19/s150x150/13398400_140638743023210_310840336_a.jpg" 
                        alt="thumbnail"
                        width="20"
                    />
                    { this.state.username }
                </div>
                <img 
                    src="https://instagram.fbna1-1.fna.fbcdn.net/vp/557a29d3526bc7f813c2a784d82de7d3/5B4E3E05/t51.2885-15/e35/26065916_2007800899433580_5879937492399947776_n.jpg"
                    width="596"
                    height="315"
                    alt="Main Post"
                />
                <div className="PostContainer__Actions">
                    <img 
                        src="https://d30y9cdsu7xlg0.cloudfront.net/png/25848-200.png" 
                        alt="like"
                        width="30"
                    />
                    <img 
                        src="https://image.flaticon.com/icons/svg/25/25663.svg" 
                        alt="comment"
                        width="30"
                    />
                </div>
                <p className="PostContainer__Likes"> {this.state.likes} likes </p>
                <CommentSection comments={ this.state.comments } />
            </div>
        )
    }
}

export default PostContainer;

