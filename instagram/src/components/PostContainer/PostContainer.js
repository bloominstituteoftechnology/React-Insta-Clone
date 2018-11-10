import React from 'react';
import CommentsSection from '../CommentsSection/CommentsSection';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="post">
            <div className="post__top">
                <img className="post__top--thumb"src={props.post.thumbnailUrl} />
                <div className="post__top--user">{props.post.username}</div>
            </div>
            <img className="post__img" src={props.post.imageUrl} />
            <div className="post__bottom">
                <i class="far fa-heart"></i> &nbsp;&nbsp;
                <i class="far fa-comment"></i>
                <div className="post__bottom--likes">{props.post.likes} likes</div>
            </div>
            <CommentsSection 
                comments={props.post.comments}
            />
        </div>
    );
}

export default PostContainer;
