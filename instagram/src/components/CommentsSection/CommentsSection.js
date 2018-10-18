import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [...props.comments],
      username: '',
      text: '',
    }
  }

  addNewComment = (event, index) => {
    event.preventDefault();
    const comments = this.state.comments.slice();
    comments.push({username: 'derpWanda', text: this.state.text })
    this.setState({ comments: comments, text: ""})
  }

  changeComment = event => {
    event.preventDefault();
    this.setState({text: event.target.value})
  }

  render() {
    return (
      <div className="commentsSection">
        <div>
          {this.state.comments.map ( (comment, index) => {
            return (
              <div className="comments" key={index}>
                  <Comment 
                    username = {comment.username}
                    text = {comment.text}
                  />
              </div>
            )
          })}
        </div>
    
        <form onSubmit={this.state.add}>
          <div className="addcomment">
            <input 
            type="text"
            name="entercomment"
            placeholder="add comment..."
            onChange={this.state.change}
            value={this.state.value}
            />        
          </div>
        </form>
    
      </div>  
      )
  }
}

CommentsSection.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentsSection