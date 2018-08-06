import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection';

const PostContainer = props => {
    return (
        <div>
            {props.data.map(each => <CommentSection key={each.username}/>)}
        </div>
    );
};

PostContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
}

export default PostContainer;