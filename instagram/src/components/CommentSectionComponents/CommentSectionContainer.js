import React from 'react';
import Comment from './Comment';
import CommentBar from './CommentBar';
import PropTypes from 'prop-types';

class CommentSectionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            comment: props.comment,
            commentText: ''
        };
    }

    componentDidMount() {
        const identifier = this.props.postIdentifier;
        if (localStorage.getItem(identifier) ){
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.postIdentifier))
            });
        } else {
            this.commentSet();
        }
    }

    componentWillUnmount() {
        this.commentSet();
    }

    commentSet = ()=> {
        localStorage.setItem(this.props.postIdentifier, JSON.stringify(this.state.comment));
    };

    handleWriteComment = (event)=> {
        this.setState({commentText: event.target.value});
    };

    handleSubmitComment = (event)=> {
        event.preventDefault();
        const commentToSubmit = {text: this.state.commentText, username: 'alexswartz'};
        const comment= this.state.comment.slice();
        comment.push(commentToSubmit);
        this.setState({comment, commentText: ''});
    };

    render() {
        return (
            <div className='comment-section'>
                <div className='comments'>
                {this.state.comment.map((comment)=> <Comment comment={comment}/>)}
                </div>
                <CommentBar 
                    commentText={this.state.commentText}
                    writeComment={this.handleWriteComment}
                    submitComment={this.handleSubmitComment}
                />
            </div>
        );
    }
}

CommentSectionContainer.propTypes = {
    comment: PropTypes.arrayOf(
        PropTypes.shape({text: PropTypes.string, username: PropTypes.string})
    )
};

export default CommentSectionContainer;