import React, { Component } from 'react';
// import postData from './application-data.js'
import instagramHeart from './instagramHeart.PNG';
import instagramComment from './instagramComment.PNG';
import './postcontainer.css';
import moment from 'moment';
import CommentSection from './CommentSection.js';

class PostContainer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            Post: {},
            currentComment: ''
        }
    }

    componentDidMount() {
        this.setState (
            {
                Post: this.props.Post
            }
        );
    }

    render() {
        return (
            <div className="post">
                <div className="top">
                    <img className="thumbnail" src={this.props.Post.thumbnailUrl} alt={this.props.Post.thumbnailUrl} />
                    <div className="userName">
                        {this.props.Post.username}
                    </div>
                </div>
                <img className="mainImage" src={this.props.Post.imageUrl} alt={this.props.Post.imageUrl} />
                <div className="likeCommentButtons">
                    <img className="likeComment" src={instagramHeart} alt={''}/>
                    <img className="likeComment" src={instagramComment} alt={''} />
                </div>
                <div className="numLikes">
                    {this.props.Post.likes} likes
                </div>
                <CommentSection comments={this.props.Post.comments}/>
                <div>{moment( this.state.Post.timestamp , "MMMM Do YYYY, h:mm:ss a").fromNow()}</div>
            </div>
        )
    }
}
export default PostContainer;