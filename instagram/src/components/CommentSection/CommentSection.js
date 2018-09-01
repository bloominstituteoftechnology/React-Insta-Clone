import React from 'react';
import './commentSection.css';
import Comment from './Comment';
import PropTypes from 'prop-types';
import commentIcon from './commentIcon.jpg';
import like from './like.jpg';
var Moment = require('moment');


class CommentSection extends React.Component {
    constructor() {
        super();
    }

    time = (element) => {
        console.log(element)
    }

    render() {
        return (
            <div className="comment-section">
                <img src={commentIcon} alt="comment"/>
                <img src={like} alt="like"/>
                <h5>{this.props.post.likes} likes</h5>
                {this.props.comments.map(comment => <Comment comment={comment}/>)}
                <h6>{Moment(this.props.post.timestamp).format()}</h6>
                <div className="add-comment">
                <input type="text" placeholder="Add a comment..."/>
                </div>
            </div>
        )
    }
}


CommentSection.propTypes = {
    post:PropTypes.shape ({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    })
}

export default CommentSection;