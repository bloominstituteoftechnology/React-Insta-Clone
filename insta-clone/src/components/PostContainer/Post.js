import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const Post = props => {
    // console.log(props.postdata)
    return (
        <div>
            <header>
                <img className='thumbnail' src={props.postdata.thumbnailUrl} alt='' />
                <p>{props.postdata.username}</p>
            </header>
            <img src={props.postdata.imageUrl} alt='' />
            <div>
                <p>like button</p>
                <p>comment button</p>
            </div>
            <CommentSection comments={props.postdata.comments}/>
        </div>
    )
}

Post.propTypes = {
    comments: PropTypes.arrayOf({
        username: PropTypes.string,
        text: PropTypes.string,
    }),
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
}

export default Post;