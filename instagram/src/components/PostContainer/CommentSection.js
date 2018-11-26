import React, { Component } from 'react';
import Comment from './Comment';
import CommentFooter from './CommentFooter';
import PropTypes from 'prop-types';

class CommentSection extends Component {
	constructor(props) {
    	super();
    	this.state = {
      		comments: props.comments,
      		modifiedTimestamp: props.modifiedTimestamp,
      		inputText: ''
    	};
  	}

  	updateCommentText = event => {
  		console.log(event.key);
  		if(event.key === 'Enter'){
  			//create new comment
  			//clear input text
  			this.setState({
  				comments: [...this.state.comments, {username: 'alexcartaz', text: this.state.inputText}],
		    	inputText: ''
		    });
  		}else{
		    this.setState({
		      inputText: this.state.inputText + event.key
		    });
		}
	};

  	render() {
		return (
			<React.Fragment>
				<div className="post-comments-container">
		    		{this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
		   		</div>
		   		<CommentFooter modifiedTimestamp={this.state.modifiedTimestamp}/>
		   		<div className="add-comment-more-options-container">
				    <input className="comment-input-box" type="text" placeholder='Add a comment...' value={this.state.inputText} onKeyPress={this.updateCommentText}></input>
				    <div className="more-options-icon">{'\uf142'}</div>
				</div>
		   	</React.Fragment>
	  	);
	}
}

CommentSection.propTypes = {
  comment: PropTypes.object
};

export default CommentSection;