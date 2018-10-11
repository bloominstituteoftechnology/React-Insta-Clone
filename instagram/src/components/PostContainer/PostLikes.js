import React from "react";
// import "./PostContainer.css";
import { IconsComment, IconSymbols, UserComments } from "./PostSyles.js";

class PostLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes
    };
    console.log(this.state);
  }

  increment = prevState => {
    this.setState(prevState => ({ likes: prevState.likes + 1 }));
  };

  render() {
    return (
      <div>
        <IconsComment>
          <IconSymbols>
            <i className="fa fa-heart-o" onClick={this.increment} />
          </IconSymbols>
          <IconSymbols>
            <i className="fa fa-comment-o" />
          </IconSymbols>
        </IconsComment>
        <div>
          <UserComments>{this.state.likes} likes</UserComments>
        </div>
      </div>
    );
  }
}

export default PostLikes;
