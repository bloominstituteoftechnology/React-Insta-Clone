import React from "react";

class Likes extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: Math.floor(Math.random() * 5000)
    };
  }

  addLike = (event) => {
      event.preventDefault();
    this.setState(prevState => ({ likes: prevState.likes + 1 }));
  };

  render() {
    return (
      <div className="iconContainer">
        <i className="far fa-comment" />
        <button onClick={this.addLike} className="likeButton"><i className="far fa-heart" /></button>
        <p className="likes">{this.state.likes} likes</p>
      </div>
    );
  }
}

export default Likes;
