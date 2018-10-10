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
          <div className="Post-head">
            <div className="Post-head-avatar">
              <img src={avatar} alt={nickname} />
            </div>
            <div className="Post-nickname">
              <span>{nickname}</span>
            </div>
          </div>
        </header>
        <div className="Post-image">
          <div className="Post-image-bg">
            <img alt={caption} src={image} />
          </div>
        </div>
        <section className="Post-icons">
          <div className="left-icons">
            <div className="Post-icon-heart" />
            <div className="Post-icon-comment" />
            <div className="Post-icon-share" />
          </div>
          <div className="right-icons">
            <div className="Post-icon-save" />
          </div>
        </section>
        <section className="Post-likes">{likes} Likes </section>
      </section>
    );
  }
}
export default PostContainer;
