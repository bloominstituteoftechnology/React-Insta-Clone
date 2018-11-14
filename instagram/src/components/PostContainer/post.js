import React from 'react';

import CommentSection from '../CommentSection/commentsection';
import PostHeader from './postheader';

import './postcontainer.css';


const Post = props => {
    return (
        <div className="postIndividual">
            <div>
                <PostHeader
                    userimg={props.post.thumbnailUrl}
                    username={props.post.username}
                />
            </div>
            <div>
                <img className="postImage"
                    alt="post visual rep"
                    src={props.post.imageUrl}
                />
            </div>
            <div className="postIcon">
                <div className="postIconImg">
                    <img src={require('../img/heart-regular.svg')} />
                </div>
                <div className="postIconImg">
                    <img src={require('../img/comment-regular.svg')} />
                </div>
            </div>
            <div className="likes">
                <p>{props.post.likes} likes</p>
            </div>
            <div>
                <CommentSection comments={props.post.comments} />
            </div>
            <div className="timePosted">
                <p>{props.post.timestamp}</p>
            </div>
        </div>

    );
};

export default Post;