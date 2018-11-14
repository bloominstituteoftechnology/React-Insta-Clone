import React, { Fragment, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PostContainer";
import PropTypes from "prop-types";
import styled from "styled-components";

const LikeAndComment = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Likes = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const LikeText = styled.p`
  margin: 0;
  font-weight: bold;
`;

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
        <LikeAndComment>
          <FontAwesomeIcon
            icon={["far", "heart"]}
            size="2x"
            className="icon"
            onClick={this.plusLike}
          />

          <FontAwesomeIcon
            className="icon"
            icon={["far", "comment"]}
            flip="horizontal"
            size="2x"
          />
        </LikeAndComment>
        <Likes>
          <LikeText>{this.state.likes} likes</LikeText>
        </Likes>
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
