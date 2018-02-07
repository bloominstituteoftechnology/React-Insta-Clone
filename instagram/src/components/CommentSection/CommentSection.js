import React from 'react';
import { Panel, Image, Grid, Row, Col, Clearfix } from 'react-bootstrap';

class CommentSection extends React.Component {
  nextId = 1;
  state = {
    id: 1,
    username: 'User',
    comments: [],
    newComment: '',
  };

  componentDidMount() {
    this.setState({
      comments: this.props.comments,
    })
  }

  getNextId = () => {
    return this.nextId++;
  }

  addComment = (event) => {
    event.preventDefault();
    const newComment = {
      id: this.getNextId(),
      username: this.state.username,
      text: this.state.newComment,
    };

    const updateCommentArr = this.state.comments;
    updateCommentArr.push(newComment);

    this.setState({
      comments: updateCommentArr,
      newComment: '',
    });
  }

  updateNewComment = (event) => {
    this.setState({ newComment: event.target.value});
  }

  render() {
    return (
      <Grid>
        {this.state.comments.map((comment, i) => {
          return (
            <Col key={this.getNextId()}>
              <Row><strong>{comment.username}</strong></Row>
              <Row>{comment.text}</Row>
            </Col>
          );
        })}
        <form onSubmit={this.addComment}>
          <input 
          type="text"
          value={this.state.newComment}
          onChange={this.updateNewComment}
          placeholder="Add comment" />
        </form>
      </Grid>
    )
  };
}

export default CommentSection;
