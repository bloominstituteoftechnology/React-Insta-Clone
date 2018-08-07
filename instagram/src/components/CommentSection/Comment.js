import React from 'react';
import PropTypes from 'prop-types';
import options from '../../assets/options.jpg';
import './CommentSection.css'

const Comment = props => {
    return(
        <div>
            <div>
                {props.comments.map(comment => {
                    return(
                        <div key={comment.text}>
                            <p><strong>{comment.username}</strong> {comment.text}</p>
                        </div>
                    );
                })}
            </div>
            {/* <p className="timeStamp">{props.timestamp}</p> */}
            <form className="bottomInput" onSubmit={props.addNewComment}>    
                <input  
                    type="text"
                    onChange={props.changeHandler}
                    placeholder="Add a comment..." 
                    name="comment" 
                />
                <img className="optionsImage" src={options} alt="Comment Options" />
            </form>
        </div>
    );
}

Comment.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
};

export default Comment;