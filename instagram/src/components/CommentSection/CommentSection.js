import React from 'react';
import Comment from './Comment';
// import './CommentSection.css';
import AddComment from './AddComment';
import SocialButtons from './SocialButtons';
import styled from 'styled-components';

class CommentSection extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      commentInput: '',
      likes: 0,
      username: 'TestUsername',
    };
  }

  componentDidMount() {
    console.log(this.props.post);
    const { comments, likes } = this.props.post;
    console.log('c', comments, 'l', likes);
    this.setState({
      // comments: this.props.post.comments,
      // likes: this.props.post.likes,
      comments,
      likes,
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  increaseLikes = (event) => {
    event.preventDefault();
    this.setState({ likes: this.state.likes + 1 });
  };

  addNewComment = (event) => {
    event.preventDefault();
    if (this.state.commentInput) {
      this.setState({
        comments: [
          ...this.state.comments,
          {
            username: this.state.username,
            text: this.state.commentInput,
          },
        ],
        commentInput: '',
      });
    }
  };

  render() {
    // console.log('comment section render()');
    // console.log(this.props);
    // console.log(this.state.comments);
    // console.log('render', this.state.commentInput);
    // console.log('----------------');
    return (
      <CommentContainer>
        <SocialButtons
          increaseLikes={this.increaseLikes}
          likes={this.state.likes}
        />
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.text} />
        ))}
        <AddComment
          addNewComment={this.addNewComment}
          commentInput={this.state.commentInput}
          handleChange={this.handleChange}
        />
      </CommentContainer>
    );
  }
}

export default CommentSection;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
