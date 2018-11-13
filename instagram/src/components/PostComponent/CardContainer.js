import React from 'react';
import Card from './card';
import PropTypes from 'prop-types';
import './PostContainer.css';



const CardContainer = (props) => {
    return(
        <div className="post-container container">
            {props.posts.map(post => <Card key={post.timestamp} post={post} />)}
        </div>
    )
}

CardContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        comments: PropTypes.arrayOf(PropTypes.object),
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        thumbnailUrl: PropTypes.string,
        timestamp: PropTypes.string,
        username: PropTypes.string
    }))
}

export default CardContainer;