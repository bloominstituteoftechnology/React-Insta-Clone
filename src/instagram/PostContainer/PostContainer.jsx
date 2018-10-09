import React, { Component } from "react";
import "./PostContainer.css";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.data.likes
    };
  }

  handleLikes = (event, index) => {
    this.setState(preState => {
      return { likes: preState.likes + 1 };
    });
  };

  render() {
    const nickname = this.props.data.nickname;
    const avatar = this.props.data.avatar;
    const image = this.props.data.image;
    const caption = this.props.data.caption;
    const likes = this.props.data.likes;

    return (
      <section className="Post" ref="Post">
        <header>
          <div className="Post-user">
            <div className="Post-user-avatar">
              <img src={avatar} alt={nickname} />
            </div>
            <div className="Post-user-nickname">
              <span>{nickname}</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img alt={caption} src={image} />
          </div>
        </div>
        <div className="Post-caption">
          <strong>{nickname}</strong> {caption}
        </div>
      </section>
    );
  }
}
export default PostContainer;
