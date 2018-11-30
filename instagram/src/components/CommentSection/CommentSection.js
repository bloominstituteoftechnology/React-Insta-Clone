import React from "react";
import Comment from "./Comment";

import styled from 'styled-components';

const CommentForm = styled.form`
  border-top: 1px solid lightgray;
`;

const CommentInput = styled.input`
  width: 100%
  padding: 10px 5%;
  border: none;
  outline: none;
  font-size: 1.7rem;
`;

const Time = styled.p`
  color: grey;
  font-size: 1.5rem;
  margin: 10px 0;
`;

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputComment: {},
    }
  }

  changeInput = event => {
    this.setState({inputComment:{
      text: event.target.value,
      username: 'horrifiedwooden'
    }})
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.addNewComment(this.state.inputComment, this.props.postIndex)
  }

  timePass = () => {
      let time =this.props.post.timestamp;	    
      time = time.split(' ');
      time.pop();
      for(let i = 0; i < time.length; i++) {	    
        if(time[i].includes('th')) {	       
          time[i] = time[i].replace('th','');	       
        } else if(time[i].includes(',')) {	     
          time[i] = time[i].replace(',', '');	       
        }	       
      }
      let mili = Date.parse(new Date(time));
      let now = Date.parse(new Date());	   
      let long = (now-mili);	    
      if (long < 3600000*24) {	     
        return `${Math.floor(long/3600000)} ${Math.floor(long/3600000) < 2 ? 'hour':'hours'} ago`
      } else if(long < 2592000000) {	
       return `${Math.floor(long/86400000)} ${Math.floor(long/86400000) < 2 ? 'day':'days'} ago`
      } else if (long < 31104000000) {
        return `${Math.floor(long/2592000000)} ${Math.floor(long/2592000000) < 2 ? 'month': 'months'} ago`
      } else {
        return `${Math.floor(long/31104000000)} ${Math.floor(long/31104000000) < 2 ? 'year': 'years'} ago`
      }
  }

  render() {
    return(
      <div>
        {this.props.comments.map(comment => (
          <Comment 
            comment={comment} 
            key={comment.text}

          />
        ))}
        <Time>{this.timePass()}</Time>
        <CommentForm onSubmit={this.onSubmit}>
          <CommentInput 
            placeholder="Add a comment..."
            onChange={this.changeInput} 
          />
        </CommentForm>
      </div>
    )
  }
  
}

export default CommentSection;