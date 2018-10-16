import React from 'react';
import PropTypes from 'prop-types';

const Comment = (props) => {
    return ( <div class="commentContainer">
        {props.input.map((item, index) => {
            return (
                <div class="comment"
                key={index}>
                    <div class="commentUser">{item.username}</div>
                    <div class="commentText">{item.text}</div>
                </div>
            )
        })}
            <div class="timestamp">6 hours ago</div>
            <form class="addComment" onSubmit={props.addComment}>
                <input 
                type="text" 
                placeholder="Add a comment . . ."
                onChange={props.changeHandler}
                name="newData"
                value={props.newData}
                ></input>
            </form>
        </div> );
}
Comment.propTypes = {
    input: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
};
 
export default Comment;
