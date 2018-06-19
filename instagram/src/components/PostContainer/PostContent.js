import React from 'react';
import './Post.css';

const PostContent = (props) => {
    return (
        <div className='post-content-container'>
            <img src={props.imageUrl} className='picture__content' alt='users main content' />
            <div className='content__footer'>
                <div className='footer__icons'>
                    <i className="far fa-heart footer__icon" onClick={(e) => {
                        props.addLikeHandler(e, props.index);
                        e.target.classList.toggle('heart--active');
                        
                    }}></i>
                    <i className="far fa-comment footer__icon"></i>
                </div>
                <p className='footer__likes'>{props.likes} likes</p>
            </div>
        </div>
    );
}

export default PostContent;