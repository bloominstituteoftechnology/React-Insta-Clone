import React from "react";
import like from "../../icons/heart_unfilled.png";
import liked from "../../icons/heart_filled.png";

class Like extends React.Component {
  likeHander = e => {
    e.target.src = e.target.src === like ? liked : like;
    let bool = e.target.src === like ? false : true;
    this.props.cb(bool);
  };

  render() {
    return (
      <div>
        <input
          className="Icons"
          src={like}
          type="image"
          onClick={this.likeHander}
        />
      </div>
    );
  }
}
export default Like;
