import React from 'react';
import Post from './Post.js'
import PropTypes from 'prop-types';

const PostContainer = (props) => {


    if (!props.dummyData.length) {
        console.log('dummy data is rendering');
        return <h3>Loadinating...</h3>
    }

    return (
        <div>
            {props.dummyData.map((data) => {
                return (
                    <Post
                        postData={data}
                        key={Math.random()}
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