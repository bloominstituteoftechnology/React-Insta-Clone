import React, {Component} from "react";
import "./Post.css";
import CommentSection from '../CommentSection';
import PropTypes from 'prop-types';

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const nickname = this.props.username;
    const avatar = this.props.avatar;
    const image = this.props.image;


    return <article className="Post" ref="Post">
      <header>
        <div className="Post-user">
          <div className="Post-user-avatar">
            <img src={avatar} alt={nickname}/>
          </div>
          <div className="Post-user-nickname">
            <span>{nickname}</span>
          </div>
        </div>
      </header>
      <div className="Post-image">
        <div className="Post-image-bg">
          <img alt={image} src={image}/>
        </div>
      </div>
      <div className="Post-caption">
        <strong>Chris</strong>
        !


        <CommentSection />
      </div>
    </article>;

  }
}

PostContainer.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string,
  image: PropTypes.string,
  caption: PropTypes.array
};

export default PostContainer;
