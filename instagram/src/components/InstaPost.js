import React from 'react';
import PropTypes from 'prop-types';

const InstaPost = (props) => {

    return (
        <div>

            <div className='instaHeader'>
            <img src={props.instaPost.thumbnailUrl} alt=""/>
            <p>{props.instaPost.username}</p>
            </div>

            <img src={props.instaPost.imageUrl} alt=""/>



        </div>
    )
}

InstaPost.propTypes = {
    instaPost: PropTypes.object.isRequired
}

export default InstaPost