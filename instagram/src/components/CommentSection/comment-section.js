import React from 'react';
import PropTypes from "prop-types";
import './comment.css';

function Comment(props) {
    return (
        <div>
	  <div className="comment">
	    <p><span className="username">{props.comment.username}</span> <span>{props.comment.text}</span></p>
	  </div>
	</div>
    );
};

// function NewComment(props) {
//     return(
// 	<form>
// 	  <input value={props.inputText} onChange={props.handleInput} />
// 	  <button onClick={props.addUser}>Add user</button>
// 	</form>
//     );
// }

Comment.propTypes = {
    username: PropTypes.string,
    text: PropTypes.string
};

export default Comment;


// <div className="comment">
//   <p><span className="username">{props.comment.username}</span> <span>{props.comment.text}</span></p>
// </div>

// <form>
// <input value={props.inputText} onChange={props.handleInput} />
// <button onClick={props.addUser}>Add user</button>
// </form>
