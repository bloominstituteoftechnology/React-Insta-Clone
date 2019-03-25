import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './postContainer.scss';

const PostContainer = props => {
    return (
        <article className='post'>
            <section className='head'>
                <img src={props.post.thumbnailUrl} />
                <span>{props.post.username}</span>
            </section>
            <img className='postImg' src={props.post.imageUrl} />
            <section className='cAndL'>
                <i className='far fa-heart'></i>
                <i className='far fa-comment'></i>
                <span>{props.post.likes}</span>
            </section>
            {props.post.comments.map(comment => (
                <CommentSection
                    comment={comment}
                    key={props.post.timestamp}
                />
            ))}
        </article>
    )
}

export default PostContainer;