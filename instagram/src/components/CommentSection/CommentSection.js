import React, {Component} from 'react';
import "./CommentSection.css";

class CommentSection extends Component{
  constructor(props){
    super(props);
    this.state = {
      username:this.props.username,
      text:this.props.text
    }
  }

  render(){
    return (<div className="CommentDiv">
      <p className="Name">{this.state.username}</p>
      <p className="Comment">{this.state.text}</p>
    </div>
    );
  }
}






export default CommentSection;
