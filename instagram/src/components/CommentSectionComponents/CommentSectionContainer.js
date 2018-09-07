import React from 'react';
import Comment from './Comment';
import CommentBar from './CommentBar';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentSectionWrapper = styled.div`
    padding-left: 20px;
    padding-bottom: 20px;
    width: 100%;
    margin-left: 2%;
    margin-top: -5px;
    margin-bottom: 40px;
`;

const Comments = styled.div`
    margin-right: 4%;
    padding-bottom: 20px;
    padding-top: 10px;
`;

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
            <CommentSectionWrapper>
                <Comments>
                {this.state.comment.map((comment)=> <Comment comment={comment}/>)}
                </Comments>
                <CommentBar 
                    commentText={this.state.commentText}
                    writeComment={this.handleWriteComment}
                    submitComment={this.handleSubmitComment}
                />
            </CommentSectionWrapper>
        );
    }
}

CommentSectionContainer.propTypes = {
    comment: PropTypes.arrayOf(
        PropTypes.shape({text: PropTypes.string, username: PropTypes.string})
    )
};

export default CommentSectionContainer;