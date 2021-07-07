import React from 'react';
import './Posts.css';
import PropTypes from 'prop-types';

const PostHeader = props => {
    return (
        <div>
            <div>
                <img 
                    alt="post header" 
                    className="post-thumb" 
                    src={props.thumbnailUrl}
                />
            </div>
            <div>
                {props.username}
            </div>
        </div>
    );
};

PostHeader.propTypes = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string
};

export default PostHeader;