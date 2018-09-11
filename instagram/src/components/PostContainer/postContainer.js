import React from 'react';
import PropTypes from 'prop-types';
import './postContainer.css';
import Posts from './Posts';



const PostContainer = (props) => {
    return <div>{props.data.map((each) => <Posts key={each.username} post={each} />)}
    </div>
}

PostContainer.propTypes = {
    dummyData: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        thumbnail: PropTypes.string,
        imgurl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string})
            )
        }))
    };

export default PostContainer;