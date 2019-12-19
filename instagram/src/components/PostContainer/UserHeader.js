import React from 'react';
import PropTypes from 'prop-types';


const UserPostHeader = props => {
    return(
        
        <div className="user-header">
            <img className="thumbnail-img" src={props.thumbnailUrl} alt=""/>
            <p className="usr-header-text">{props.username}</p> 
        </div>

    );
}

export default UserPostHeader;


UserPostHeader.propTypes = {
    thumbnail: PropTypes.string,
    username: PropTypes.string
}