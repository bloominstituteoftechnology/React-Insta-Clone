import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import InputCom from './InputCom';

class CommentList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			comments: props.comments,
			commentText: "",
		};
	}

	addNew = (event) => {
		event.preventDefault();
		this.setState({
			comments: [...this.state.comments, {
				username: 'marshall',
				text: this.state.commentText,
			}],
			commentText: "",
		})
	}

	commentText = event => {
    this.setState({
      commentText: event.target.value,
    });
  };

	render(){
		return (
			<div>
				<div>{this.state.comments.map((comment) => <Comment comment={comment} key={comment.id}/>)}</div>
				<hr className="hr-comment" />
				<InputCom addNew={this.addNew} commentText={this.commentText}/>
			</div>
		)
	}
}

CommentList.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentList;





