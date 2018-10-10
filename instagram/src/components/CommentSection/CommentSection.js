import React from 'react';
import propTypes from 'prop-types';
import NewComment from './NewComment';
import './CommentSection.css';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      comments: this.props.comments,
      commentText: '',
      container : 0
      
    }
  }
  componentDidMount() {
    this.setState({
      comments: this.props.comments
    })


  }
  addNewComment = (e) => {
    this.e.preventDefault();
    const text = e.target.children[0].value;
    const comments = this.state.comments;
    const username = this.state.username;
    comments.push({username,text})

    this.setState({
      comments: comments,
      commentText: ''
    })
  }
  onChange = (e) => {
    this.e.preventDefault();
    this.setState({
      commentText : e.target.value
    })
  }
  render() {
    return (
      <section className='comments'>
          {this.state.comments.map((comment, index) => {
            return (
              <section className='comment' key={Math.random()} id={index}>
                <p>
                <strong>{comment.username}</strong> {comment.text}
                </p>
                <span className='close' onClick={this.props.close}>X</span>
            </section>
            );
          })}
          <NewComment onSubmit={this.props.onSubmit} value={this.props.commentText} onChange={this.props.onChange}/>
      </section>
    );
  }
}
CommentSection.propTypes = {
  comments: propTypes.array
}

export default CommentSection;