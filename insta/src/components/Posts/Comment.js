import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
    render() {
        return (
            <>
                <p><span style={{fontWeight: "bold"}}>{this.props.comment.username}</span> {this.props.comment.text}</p>
            </>
        );
    }
};

//Test
Comment.propTypes = {
    comment: PropTypes.object
};

export default Comment;