import React from 'react';
import PropTypes from 'prop-types';

// Components
import Post from './Post';

const Posts = props => {
    return(
        <div className='posts'>
            {props.posts.map((p, i) => (
                <Post post={p} key={i}/>
            ))}
        </div>
    )
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string, 
        thumbnail: PropTypes.string, 
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    }))
}

export default Posts;