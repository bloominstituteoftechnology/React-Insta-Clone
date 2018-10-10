import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }

    componentDidMount(){
        const id = this.props.postId;
     
        if (localStorage.getItem(id)) {
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.Id))
            });
        } else {
            this.setComments();
        }
    }

    componenetWillUnmount() {
        this.setComments();
      }

      setComments = () => {
          localStorage.setItem(
              this.props.postId,
              JSON.stringify(this.state.comments)
          );
      };

      commentHandler = event => {
          this.setState({
              comment: event.target.value
          })
      }

      handleCommentSubmit = event => {
          event.preventDefault();
          const newComment = { text: this.state.comment, username: "Toua"};
          const comments = this.state.comments.slice();
          comments.push(newComment);
          this.setState({ comments, comment: ''})
          setTimeout(() => {
              this.setComments();
          }, 500);
      }



    render() {
        return (
            <div className="comment-border">
                {this.state.comments.map((comment, i) => <Comment key={i} comment={comment} />)}
                <CommentInput comment={this.state.comment} submit={this.handleCommentSubmit} change={this.commentHandler} />
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
    )
  };
  

export default CommentSection;