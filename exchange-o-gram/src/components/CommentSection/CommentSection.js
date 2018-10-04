import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js';
import './CommentSection.css';

class CommentSection extends React.Component{
    render(){
        return (
            <div className="comments-container">
                <div className="comments-icon-container"><i className="comments-icon far fa-heart fa-2x"></i><i className="comments-icon far fa-comment fa-2x"></i></div>
                <p className="likes">0 likes</p>
                <div className="comments">{this.props.comments.map((comment)=>{
                    return(
                        <div key={comment.text}>
                            <Comment comment={comment}/>
                        </div>
                    )
                })}</div>
                <p className="time-stamp">2 HOURS AGO</p>
                <input className="add-comment" placeholder="Add a comment..."></input>
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
}

export default CommentSection;