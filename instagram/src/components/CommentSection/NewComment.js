import React from 'react';
import './NewComment.css';

// const NewComment = props => {
//     return (
//         <form className="newComment" onSubmit={props.newComment}>
//             <input id="newCmt" type="text" placeholder="Add a comment..."/>
//             <label className="commentLabel" htmlFor="newCmt">...</label>
//         </form>
//     );
// }

function NewComment(props) {
    return (
        <div className="App">
            <form className="newComment" onSubmit={props.newComment}>
            <input id="newCmt" type="text" placeholder="Add a comment..."/>
            <label className="commentLabel" htmlFor="newCmt">...</label>
        </form>
      </div>
    );
}

export default NewComment;