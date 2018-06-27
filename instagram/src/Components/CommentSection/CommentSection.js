import React from 'react';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div className='comments-section'>
                <span>{this.props.comments.username}</span> 
                <span>{this.props.comments.text}</span>
            </div>
        );
    }
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
    })
}
 
export default CommentSection;