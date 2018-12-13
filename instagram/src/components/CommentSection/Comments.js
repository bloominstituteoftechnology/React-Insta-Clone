import React from 'react';
import './Comments.css';
import Comment from './Comment';

class Comments extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      comments: props.comments,
    }
  }

  render(){
    console.log(this.props);
    return(
      <div>
        {this.state.comments.map((comment, index) =>(
        <Comment
         key={index}
         comment={comment} />
      ))}
      <p>{this.props.time}</p>
      </div>
    )
  }
}

export default Comments;
