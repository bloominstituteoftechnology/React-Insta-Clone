import React from 'react';
import PropTypes from 'prop-types';

function PostAvatar(props) {
    return(
        <div>
            <h4>
                {props.posterName}
            </h4>

            <img 
                className="icon"
                src={props.posterAvatar}
                alt="OP's profile picture"
            />
        </div>
    )
}

PostAvatar.propTypes = {
    post: PropTypes.shape({
      posterName: PropTypes.string.isRequired,
      posterAvatar: PropTypes.string.isRequired,
    })
  };

export default PostAvatar;