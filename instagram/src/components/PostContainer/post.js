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
                <div>
                    Like Comment
                </div>
                <div className="likes">
                    <p>{props.post.likes} likes</p>
                </div>
            <div>
                <CommentSection comments={props.post.comments}/>
            </div>
        </div>

    );
};

export default Post;