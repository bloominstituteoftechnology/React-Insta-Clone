import React, {Component} from 'react';

class CommentSection extends Component {
    constructor(comments) {
      super(comments);
      this.state = { 
          comments: comments.comments,
          inputValue: '',
       };
    }
  
  
    handleInputValue=(event)=>{
      this.setState({inputValue:event.target.value});
    }
  
  
    handleFormSubmission=(event)=>{
        event.preventDefault();
        let newArray= this.state.comments.slice();
        newArray.push({username:'Noah',text:this.state.inputValue});
        this.setState({comments:newArray, inputValue:''});
    }
  
    render() {
      return (
        <div>
          {this.state.comments.map(UT => (
            <div>
              {UT.username} {UT.text}
            </div>
          ))}
          <form onSubmit={this.handleFormSubmission}>
            <input onChange={this.handleInputValue} type="text" value={this.state.inputValue} placeholder="Enter comment here" />
          </form>
        </div>
      );
    }
  }
  
  export default CommentSection;
  


