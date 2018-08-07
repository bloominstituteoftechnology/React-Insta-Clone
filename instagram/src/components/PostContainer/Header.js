import React from 'react';
import './PostContainer.css';

const Header = props => {
    return (
        <div className="post-header">
            <div className="thumb-wrapper">
                <img
                    alt="post header"
                    className="thumbnail-img"
                    src={props.thumbnailUrl}
                />
            </div>
            <div>{props.username}</div>
        </div>
    );
};

export default Header;