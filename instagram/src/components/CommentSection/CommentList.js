import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			comments: props.comments
		};
	}
	render(){
		return (
			<div>{this.state.comments.map((comment) => <Comment comment={comment} key={comment.id} />)}</div>
		)
	}
}

CommentList.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentList;





