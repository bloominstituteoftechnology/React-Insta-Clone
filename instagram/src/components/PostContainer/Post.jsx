import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import CommentSection from "../CommentSection/CommentSection";

class Post extends React.Component {
  state = {
    likes: this.props.post.likes,
    liked: false
  };

  // DAY 2 MVP goal
  like = () => {
    // grab the likes and liked state properties
    let likes = this.state.likes;
    let liked = this.state.liked;

    // toggle the likes and liked status
    if (liked) {
      likes--;
      liked = false;
    } else {
      likes++;
      liked = true;
    }

    // set the new likes and liked status
    this.setState({ liked, likes });
  };

  render() {
    return (
      <div className="post-wrapper">
        <Card>
          <CardBody>
            <div className="post-header-wrapper">
              <img src={this.props.post.thumbnailUrl} alt={"Profile thumb."} />
              <CardTitle className="post-title">{this.props.post.username}</CardTitle>
            </div>
          </CardBody>
          <img
            width="100%"
            src={this.props.post.imageUrl}
            alt="Card image cap"
          />
          <CardBody>
            <CardText>
              <div className="post-icons-wrapper">
                <i
                  onClick={this.like}
                  style={
                    this.state.liked
                      ? { color: "rgba(211, 88, 170, 0.8)" }
                      : null
                  }
                  className={
                    "fa-heart likes-heart " + (this.state.liked ? "fas" : "far")
                  }
                />
                <i className="far fa-comment" />
              </div>
              <p style={this.state.likes > 9000 ? { color: "red" } : null}>
                {this.state.likes > 9000
                  ? "IT'S OVER 9000!"
                  : this.state.likes + " likes"}
              </p>
            </CardText>

            <CommentSection post={this.props.post} />
          </CardBody>
        </Card>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};

export default Post;
