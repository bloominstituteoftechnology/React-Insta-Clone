import React, {Component} from 'react';

export default class CommentSection extends Component {

	constructor(props) {
		super(props);

		this.state = {
            comments: [],
            username: "",
			Text: ""
		}
    }

    componentDidMount() {
		this.setState({
			comments: this.props.comments
		});
}

render() {
    return (
        <div class="comment-container">
        {this.state.comments.map((comment, index) => {
            return (
                <div className="comment-section" key={index}>
                    <span class="comment-username">{comment.username}</span>
                    <p class="comment-text">{comment.text}</p>
                </div>
            );
        })}
        </div>        
    )}
}
