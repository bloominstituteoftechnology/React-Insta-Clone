import React, { Component } from 'react';
import './CommentSection.css'

class CommentInput extends Component {
    constructor(props) {
      super(props);
      this.state = {
          inputValue: '',
          index: props.ind
      };
    }
  
    // Set the dummyData when the component mounts
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.inputValue);
        this.props.addNewCom(this.state.inputValue, this.state.index);
    }

    updateInputValue(e) {
        this.setState({
          inputValue: e.target.value
        });
    }
  
    render() {
        return (
            <form className="comment-input" onSubmit={this.handleSubmit}>
                <input type="input" value={this.state.inputValue} onChange={e => this.updateInputValue(e)} name="comInput" placeholder="Add a comment..." />
    
                <img src={require("./comment-dots.png")} alt="comment dots"/>
            </form>
        )
    }
}



export default CommentInput;