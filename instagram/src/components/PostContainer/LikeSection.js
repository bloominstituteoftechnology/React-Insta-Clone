import React from 'react';
import PropTypes from 'prop-types';


const LikeSection = props => {
    return(
        <div className="likes-container">
            <p className="likes">{props.likes} likes</p>
        </div>
    );
}

export default LikeSection;


LikeSection.propTypes = {

    likes: PropTypes.number
}