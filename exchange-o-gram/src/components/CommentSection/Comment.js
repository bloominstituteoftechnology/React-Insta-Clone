import React from 'react';
import PropTypes from 'prop-types';

class Comment extends React.Component{
    render(){
        return(
            <div>
                <p><strong>{this.props.comment.username}</strong> {this.props.comment.text}</p>
            </div>
        )
    }
}

Comment.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }).isRequired
}

export default Comment;