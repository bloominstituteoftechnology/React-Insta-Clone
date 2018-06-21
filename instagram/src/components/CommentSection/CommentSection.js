import React from 'react';
import Comment from './Comment';
import './CommentSection.css';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            comments: props.comments,
            comment: ''
        }
    }

    componentDidMount() {
        const id = this.props.postId;
        if(localStorage.getItem(id)) {
            this.setState({
                comments:JSON.parse(localStorage.getItem(this.props.postId))
            });
        }
        else {
            this.setComments();
        }
    }

    componentWillUnmount() {
        this.setComments();
    }

    setComments = () => {
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        );
    }

    commentHandler = event => {
        this.setState({ comment: event.target.value})
    }

    handleCommentSubmit = event => {
        event.preventDefault();
        const nuComment = {text: this.state.comment, username: 'Desco'};
        const comments = this.state.comments.slice();
        comments.push(nuComment);
        this.setState({comments, comment: '' });
        setTimeout(() => {
            this.setComments();
          }, 500);
    }

    render(){
    return(
        <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput
          comment={this.state.comment}
          submitComment={this.handleCommentSubmit}
          changeComment={this.commentHandler}
        />
      </div>
    );
}
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
  };

export default CommentSection;