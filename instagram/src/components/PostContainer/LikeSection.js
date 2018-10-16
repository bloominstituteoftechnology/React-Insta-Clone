import React from 'react';
import PropTypes from 'prop-types';


const LikeSection = props => {
    return(
        <div className="likes-container">
            <p>{props.likes}</p>
        </div>
    );
}

export default LikeSection;


LikeSection.propTypes = {

    likes: PropTypes.number
}