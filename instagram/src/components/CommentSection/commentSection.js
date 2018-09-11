import React from 'react';
import PropTypes from 'prop-types';
import './commentSection.css';


 function CommentSection(props) {
     return (<div>      
                <form>
                    <input value={props.commentInput} onChange={props.handleInput} placeholder="Add a comment..." />
                    <button onClick={props.addComment}>comment</button>
                </form>
            </div>
     );
    };
CommentSection.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
};
 export default CommentSection;