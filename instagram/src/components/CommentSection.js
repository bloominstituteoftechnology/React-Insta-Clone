import React from 'react';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }

    render () {
        return (
            <div>
            {this.state.comments.map((comments, input) => <Comment key={input} comment={comments} />)}
            <Comment
              comment={this.state.comment}
             />
          </div>
        )
    }
}



const Comment = props => {
    return (
      <div className="comment-text">
        <span className="comment">{props.comment.text}</span>{' '}
        <span className="user">-{props.comment.username}</span>
      </div>
    );
  };


Comment.PropTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}


export default CommentSection


 

