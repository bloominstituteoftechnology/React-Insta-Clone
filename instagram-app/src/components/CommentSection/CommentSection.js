import React from 'react'; 
import Comment from './Comment'; 
import AddNewComment from './AddNewComment'; 

import styled from 'styled-components'; 

const ExistingComments = styled.div`
    width: 89.5%; 
    text-align: left; 
    margin: 0 auto; 
    border-right: 1px solid grey; 
    border-left: 1px solid grey;  
`;


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
        <ExistingComments>
          {this.state.comments.map((comment,i) => (
            <Comment comment={comment} key={i} />
          ))}
        </ExistingComments>

        <AddNewComment onSubmit={this.addComment} onChange={this.handleNewComment} commentField={this.state.commentField}/>
      </div>
    );
  }
}

 export default CommentSection; 

