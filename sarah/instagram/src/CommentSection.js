// Comment Section Component
// should render an input tag
// should call componentDidMount
// should store comments in state
// should add comments to state upon mounting

import React, { Component } from 'react';


class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  // componentDidMount() {
  //   this.setState({
  //     comments: this.props.comments;
  //     });
  // }

  render() {
    return (
      <div>
      	<div>
      	  <i className="material-icons">star</i>
      	  <i className="material-icons">chat bubble outline</i>
      	</div>
      	{this.props.comments.map((comment, i) => {
          return(
            // <div key={this.props.comments[i].username}>
      	    <div key={Math.random() * i}>
              <h5>Username: {this.props.comments[i].username}</h5>
              <p>text: {this.props.comments[i].text}</p>
      	    </div>
          );
        })}
      	<form>
      	  <input type="text" name="comment" placeholder="leave a comment?"/>
      	</form>
      </div>
    )
  }
}

export default CommentSection;
