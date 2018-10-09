import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./comments.css";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      textfield: ""
    };
  }
  componentDidMount() {
    this.setState({ comments: this.props.comments });
  }

  updateTextfield = e => {
    this.setState({ textfield: e.target.value });
    console.log(this.state.textfield);
  };

  commentHandler = e => {
    e.preventDefault();
    this.setState(prevState => {
      return {
        comments: prevState.comments.concat({
          username: "Matt",
          text: this.state.textfield
        }),
        textfield: ""
      };
    });
  };

  keyPress = e => {
    if (e.keyCode === 13) {
      this.commentHandler(e);
      e.target.value = "";
    }
  };

  render() {
    return (
      <div className={"comments"}>
        {this.state.comments.map(comment => (
          <div className={"comment"}>
            <div className={"commentusername"}>{comment.username}:</div>{" "}
            {comment.text}
          </div>
        ))}
        <div className={"timeposted"}>{this.props.timestamp}</div>
        <div className={"commentcontainer"}>
          <input
            className={"commenttext"}
            onChange={this.updateTextfield}
            onKeyDown={this.keyPress}
            type="text"
            placeholder="Add a comment..."
          />
          <i class="fas fa-ellipsis-h" />
        </div>
      </div>
    );
  }
}

export default CommentSection;