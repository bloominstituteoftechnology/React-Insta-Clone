import React from 'react';
import { PropTypes } from 'prop-types';
import './PostUserInfo.sass';

const PostUserInfo = props => {
    return (
        <div className="post--user-info">
            <div className="user-info--thumbnail">
                <img src={props.thumbnailUrl} alt="" />
            </div>
            <div className="user-info--name">
                <h2>{props.username}</h2>
            </div>
        </div>
    );
};

PostUserInfo.propTypes = {
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string
};

export default PostUserInfo;
