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
		let name = Object.keys(localStorage);
		name = name[0];
		this.setState({
			comments: [...this.state.comments, {
				username: name,
				text: this.state.commentText,
			}],
			commentText: "",
		})
	}

	commentHandler = event => {
    this.setState({
      commentText: event.target.value,
    });
  };

	render(){
		return (
			<div>
				<div>{this.state.comments.map((comment, i) => <Comment comment={comment} key={i}/>)}</div>
				<hr className="hr-comment" />
				<InputCom addNew={this.addNew} commentHandle={this.commentHandler} comment={this.state.commentText}/>
			</div>
		)
	}
}

CommentList.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentList;





