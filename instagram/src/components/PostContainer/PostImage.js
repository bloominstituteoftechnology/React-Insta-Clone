import React from 'react';
import PropTypes from 'prop-types';



const PostImage = props => {
    return(
        <div className="image-post-container">
            <img src={props.image} alt=""/>
        </div>
    );

}

export default PostImage;


PostImage.propTypes = {
    image: PropTypes.string
}