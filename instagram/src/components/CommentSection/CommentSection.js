import React from 'react';
import './CommentSection.css';
import PropTypes from "prop-types";

const  CommentSection= props => {
        return( 
                <div  key={Date.now()}>{props.Comments.map(comment => { 

		return(
			
		<div className={props.CommentContainer}>	
		<p className={props.CommentUserNameStyle}>{comment.username} </p>
		<p className={props.UserText}> {comment.text}</p>
		</div>
		);

		})}
                
		<input className={props.CommentBarStyle}
                type="text"
                //onChange={this.props.inputEvent(e); this.props.enterKeyPress(e)}
                // onChange={props.searchInput}
                 //onChange={props.enterKeyPress}
                placeholder="Add a comment"
                value=""
                />

		</div>
	);
}


CommentSection.propTypes = {
  comment:PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string
  })
};





export default CommentSection;
