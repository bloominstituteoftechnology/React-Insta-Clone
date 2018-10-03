import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment.js';

class CommentSection extends React.Component{
    render(){
        return (
            <div>
                <span><i className="far fa-heart"></i><i className="far fa-comment"></i></span>
                <p>0 likes</p>
                {this.props.comments.map((comment)=>{
                    return(
                        <div key={comment.text}>
                            <Comment comment={comment}/>
                        </div>
                    )
                })}
                <input placeholder="Add a comment..."></input>
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