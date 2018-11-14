import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'
import './CommentSection.css'
import CommentInput from './CommentInput'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            inputText: ''
        }
    }
    componentDidMount() {
        this.setState({ comments: this.props.comments })
    }

    handler = event => {
        this.setState({ inputText: event.target.value
         });
        
    };
    addNewComment = event => {
        event.preventDefault();
        if (!(this.state.inputText === '')) {
            this.setState({
                comments: [
                    ...this.state.comments,
                    { username: this.props.user, text: this.state.inputText }
                ],
                inputText: ''
            });
        }
    };
  

    render() {
        return (
            <div className = 'comment-section'>
                 {
                this.state.comments.map((comment) =>
                <Comment key={Math.random()} comment={comment} />)
                } 
                <CommentInput
                    inputText = {this.state.inputText}
                    handler = {this.handler}
                    addNewComment ={this.addNewComment}
                />
            </div>
        );
    }
}


export default CommentSection;