import React from 'react'; 
import Comment from './Comment'; 
import AddNewComment from './AddNewComment'; 

import './CommentSection.css'; 


// Setting CommentSection up as a Class because it will need to hold state
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments, 
      comment: " "
    };
  }

  // Creating an addNewComment function
  addNewComment = (event, index) => {
    // Needs to add the comment on the event object to the post that is at the index number

    const newComment = { username: this.state.username, text: this.state.text };

    // Updating state
    this.setState({
      comments: [...this.state.comments, newComment],
      comment: " "
    });
  };

  render() {
    return (
      <div>
        <div className="existingComments">
          {this.state.comments.map(comment => (
            <Comment comment={comment} />
          ))}
        </div>

        <AddNewComment />
      </div>
    );
  }
}

 export default CommentSection; 

