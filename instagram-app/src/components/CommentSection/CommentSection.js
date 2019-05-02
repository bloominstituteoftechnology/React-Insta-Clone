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
      commentField: " ",
      commentName: props.commentName
    };
  }


  // This is my comment handler 
  handleNewComment = e => {
      this.setState({
          commentField: e.target.value
      })
  }

  // Creating addComment function 
  addComment = e => {
      e.preventDefault(); 
      
      const newComments = this.state.comments;

      newComments.push({text: this.state.commentField, username: this.state.commentName});

      // Clearing out field 
      this.setState({ comments: newComments, commentField: '' });

  }; 

  render() {
    return (
      <div>
        <div className="existingComments">
          {this.state.comments.map((comment,i) => (
            <Comment comment={comment} key={i} />
          ))}
        </div>

        <AddNewComment onSubmit={this.addComment} onChange={this.handleNewComment} commentField={this.state.commentField}/>
      </div>
    );
  }
}

 export default CommentSection; 

