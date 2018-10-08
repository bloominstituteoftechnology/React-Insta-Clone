import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <section className="comment">
            <div className="username">
                {props.username}
            </div>
            <div className="text">
                {props.text}
            </div>
            <form>
                <input type="text" name="commentbox" placeholder="Post Comment"></input>
            </form>
        </section>
    )
}

Comment.propTypes = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}
export default Comment;