import React from 'react';
import PropTypes from 'prop-types';
import Bolded from '../Styles/Reusables';

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

function Comment(props) {
    return (
        <div className="comment">
            <p>
                <Bolded comments>
                    {props.comment.username}
                </Bolded>
                {props.comment.text}
            </p>
        </div>
    );
}

export default Comment;