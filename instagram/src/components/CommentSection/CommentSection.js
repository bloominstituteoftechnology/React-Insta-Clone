import React, {Component} from 'react';
import './CommentSection.css'

class CommmentDidMount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            newComment: {}
        };
    }

    componentDidMount() {
        this.setState({comments: this.props.comments});
    }

    render() {
        return (
            <div className="comments">
                {this
                    .state
                    .comments
                    .map((comment, i) => { < div > {
                            comment.text
                                ? <div className="comments">
                                    <div className="comment__username">
                                        {comment.username}</div>
                                    <div className="comment__content">{comment.text}</div>
                                </div> < /div> : null
					</div >
                        } < /div>
			
			)}
		);}