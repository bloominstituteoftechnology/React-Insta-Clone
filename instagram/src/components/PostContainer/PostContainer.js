import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './postContainer.scss';

const PostContainer = props => {
    return (
        <article className='post'>
            <section className='head'>
                <img
                    src={props.post.thumbnailUrl}
                    alt={props.post.timestamp}
                />
                <span>{props.post.username}</span>
            </section>
            <img
                className='postImg'
                src={props.post.imageUrl}
                alt={props.post.timestamp}
            />
            <section className='cAndL'>
                <i
                    onClick={() => props.liker(props.post.timestamp)}
                    className={props.liked === false ? 'far fa-heart like' : 'fas fa-heart like'} />

                <i className='far fa-comment comment' />

                <span className='likes'>{props.post.likes} likes</span>
            </section>

            <div className='comments'>{props.post.comments.map((comment, id) => (
                <CommentSection
                    comment={comment}
                    key={id}
                />
            ))}
                <div className='addComment'>
                    <input placeholder='Add a comment...' />
                    <i className='fas fa-ellipsis-h' />
                </div>
            </div>

        </article>
    )
}

export default PostContainer;