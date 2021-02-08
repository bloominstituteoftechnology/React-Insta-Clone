import React from 'react';
import propTypes from 'prop-types';
import NewComment from './NewComment';
import './CommentSection.css';


class CommentSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // comments: this.props.comments,
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
   e.preventDefault();
    
    const comment = {
      username: this.state.username,
      text: e.target.children[0].value
    }
    const comments = [...this.state.comments, comment]
    // comments.push({username,text})

    this.setState({
      comments: comments, 
      commentText: ''
    })
  }
  onChange = (e) => {
    e.preventDefault();
    this.setState({
      commentText : e.target.value
    })
    
  }
 
  render() {
    return ( 
      <section className='comments'>
          {this.props.comments.map((comment, index) => {
            return (
              <section className='comment' key={`${comment.username}${comment.text}`} id={index}>
                <p>
                <strong>{comment.username}</strong> {comment.text}
                </p>
                <span className='close' onClick={this.props.close}>X</span>
              </section>
            )
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