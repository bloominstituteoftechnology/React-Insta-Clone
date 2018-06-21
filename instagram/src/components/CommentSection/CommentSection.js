import React from 'react';
import PropTypes from "prop-types";
import './commentSection.css';
import moment from 'moment'

    const CommentSection = (props) => {    
        return (
            <div className="comment" >
                {props.comments.map((ele, index)=> (
                    <p key={index} className="comment__item" >
                        <span>{ele.username}: </span> 
                        {ele.text} 
                        <span className="comment__delete" onClick={(e) => (props.deleteComment(props.index, index))}>
                            X
                        </span>
                    </p>
                ))}
                <p>{moment(props.timestamp).fromNow()} </p>
                <form onSubmit={e => {
                    e.preventDefault();
                    }}> 
                    <input
                    type='text'
                    placeholder='add comment here...'
                    name='comment'
                    onKeyDown = {e => {
                        if(e.keyCode === 13) {
                        props.addComment(e,props.index);
                        }
                    }}
                    />
                </form>
            </div>
        );
}
  
CommentSection.propTypes = {
    props: PropTypes.shape({
        text: PropTypes.number.isRequired,
        username: PropTypes.string
    })
}
export default CommentSection;
