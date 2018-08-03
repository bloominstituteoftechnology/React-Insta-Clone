import React from 'react';
import './CommentSection.css';
import PropTypes from 'prop-types';
import {StyledUser} from './CommentSectionStyle';


const Comment = props => {
    return (
        <div>
            <p className='outside-user'>
                <StyledUser>
                    {props.user}
                </StyledUser>   {props.text} 
            </p>
        </div>
    );
};

Comment.propTypes = {
    user: PropTypes.string,
    text: PropTypes.string,
}

export default Comment;