import React from 'react';
import PropTypes from "prop-types";
import '../CommentSection/commentsstyle.css';

const CommentsSection = props => {
    return (
        <div className="comments">
        {props.dummyData.map(comment => (
            <div className="next" key={Math.random()}>
                <p className="username">{comment.username}</p>
                <p>{comment.text}</p>
            </div>
        ))}
         <div className="inputbottom">
            
            <input className="inputtext" type="text" placeholder="Add a comment ..."/>
         </div>
        </div>
    )
}

CommentsSection.propTypes = {
    comment: PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string
    })
  };
 
export default CommentsSection