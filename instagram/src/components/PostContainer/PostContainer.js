import React, { Component } from "react";
import { Table } from "react-bootstrap";
import CommentSection from "../CommentSection/CommentSection";
import "./PostContainer.css";

class PostContainer extends Component {
  constructor() {
    super();
    this.state = {
      likes: undefined,
      checked: false
    };
  }

  componentDidMount() {
    this.setState({ likes: this.props.postData.likes });
  }

  handleToggle = event => {
    if (!this.state.checked) {
      this.setState({
        likes: this.state.likes + 1,
        checked: !this.state.checked
      });
      event.target.style.color = "red";
    } else {
      this.setState({
        likes: this.state.likes - 1,
        checked: !this.state.checked
      });
      event.target.style.color = null;
    }
  };

  render() {
    return (
      <div className="PostContainer">
        <Table bordered condensed>
          <thead>
            <tr>
              <th>
                <img alt="thumbnail" src={this.props.postData.thumbnailUrl} />
                <strong>{this.props.postData.username}</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={this.props.postData.imageUrl} alt="postimage" />
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>
                <div className="toggle-heart" onClick={this.handleToggle}>
                  ♥
                </div>
                <div>
                  <strong>{this.state.likes} likes</strong>
                </div>
                <div><span>Posted on {this.props.postData.timestamp}</span></div>
              </td>
            </tr>
            <tr>
              <td>
                <CommentSection comments={this.props.postData.comments} />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PostContainer;
