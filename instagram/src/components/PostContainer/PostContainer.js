import React from "react";
import "../PostContainer/PostContainer.css";
import Post from "../Post/Post";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.dummyData.map(log => {
        return log.comments;
      }),
      likes: props.likes,
    };
  }
  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  updateComments = post => {
    this.state.comments.push(post);
    this.setState(
      {
        comments: this.state.comments
      },
    );
    localStorage.setItem("comments", JSON.stringify(this.state.comments));
  };

  render() {
    return (
      <div className="container">
        <div className="contentContainer">
          {this.props.dummyData.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
                dummyData={this.props.dummyData}
                comment={this.props.comment}
                updateComments={this.updateComments}
                commentEntries={this.state.comments}
                likes={this.state.likes}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostContainer;
