import React from 'react';
import PropTypes from 'prop-types';

const LikesSection = props =>   <div className="likes-section">
                                    <div>
                                        <i className={props.bool ? "fas fa-heart fa-2x likes counter" : "far fa-heart fa-2x likes counter"} onClick={props.likeHandler}></i>
                                        <i className="far fa-comment fa-2x likes"></i>
                                    </div>
                                    <strong>{props.likes} likes</strong>    
                                </div>

LikesSection.propTypes = {
    likes: PropTypes.number
}

LikesSection.defaultProps = {
    likes: 0
}

export default LikesSection                                