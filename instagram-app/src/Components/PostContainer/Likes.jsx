import React, { Component } from "react";
import "./Post.css";

class Likes extends Component {
  constructor(props) {
    super();
    //set initial number of likes from JSON file 
    this.state = {
        numberOfLikes: props.numberOfLikes
      };
  }

  Counter = ()=>{
    this.setState({numberOfLikes: this.state.numberOfLikes+1})
  }

  render() {
    return (
      <div>
        <i className="far fa-heart" onClick={this.Counter} /> <> </>
        <i className="far fa-comment" />
        <div>{this.state.numberOfLikes}</div>
        <div> likes </div>
      </div>
    );
  }
}

export default Likes;
