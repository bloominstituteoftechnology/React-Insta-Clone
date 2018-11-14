import React, {Component} from 'react';
import '../../less/Comments.less';
import PropTypes from 'prop-types';
import NewComment from './NewComment';

class CommentSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: props.comments,
			commentInput: '',
			username: props.username,
			text: props.text,
		}
	}

	addComment = (event, index) => {
		event.preventDefault();
		this.setState({
			comments: [
				...this.state.comments,
				this.state.comments[index],
				{
					username: 'cotikor',
					text: this.state.commentInput
				}
			],
			commentInput: ''
		});
	};

	render () {
	return (
		<React.Fragment>
			<section className="comments">
				{this.state.comments.map((comment, index) => (
					<div className="comment" key={index}>
						<h3>
							<span>{this.state.username}</span> {this.state.text}
						</h3>
					</div>
				))}
			</section>
			<NewComment
				comments={this.state.comments}
				addComment={(event,index) => {this.addComment (event, index)}}
			/>
		</React.Fragment>
		);
				}	
};

CommentSection.propTypes = {
	comments:  PropTypes.arrayOf(
		PropTypes.shape({
			username: PropTypes.string,
			text: PropTypes.string
		}).isRequired
	),
};

export default CommentSection;
