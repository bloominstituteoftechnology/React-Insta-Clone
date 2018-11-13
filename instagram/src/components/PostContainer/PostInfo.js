import React, { Fragment, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PostContainer";
import PropTypes from "prop-types";

class PostInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes
    };
  }

  componentDidMount() {
    let id = this.props.id;
    if (localStorage.getItem(id)) {
      this.setState({ likes: JSON.parse(localStorage.getItem(id)) });
    } else {
      this.saveLikes();
    }
  }

  componentWillUnmount() {
    this.saveLikes();
  }
  saveLikes = () => {
    localStorage.setItem(this.props.id, JSON.stringify(this.state.likes));
  };

  plusLike = () => {
    let add = this.state.likes + 1;
    this.setState({ likes: add });
    setTimeout(() => {
      this.saveLikes();
    }, 1);
  };

  render() {
    return (
      <Fragment>
        <div className="action-buttons">
          <div className="like-container" onClick={this.plusLike}>
            <FontAwesomeIcon
              icon={["far", "heart"]}
              size="2x"
              className="icon"
              // value={props.likes}
            />
          </div>

          <FontAwesomeIcon
            className="icon"
            icon={["far", "comment"]}
            flip="horizontal"
            size="2x"
            // onClick={this.focus}
          />
        </div>
        <div className="likes">
          <p className="bold">{this.state.likes} likes</p>
        </div>
      </Fragment>
    );
  }
}
export default PostInfo;

PostInfo.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};
