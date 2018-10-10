import React from 'react';
import './PostContainer.css';
import Post from './Post.js'
import PropTypes from 'prop-types';

const PostContainer = (props) => {
    return (
        <div>
            {props.dummyData.map((data) => {
                return (
                    <Post
                        postData={data}
                        key={props.timestamp}
                    />
                )
            })}
        </div>
    )
}

PostContainer.propTypes = {
    dummyData: PropTypes.arrayOf(
        PropTypes.shape({
            thumbmailUrl: PropTypes.string,
            username: PropTypes.string,
            imageUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    username: PropTypes.string,
                    text: PropTypes.string,
                })
            )
        })
    ).isRequired
}

export default PostContainer;