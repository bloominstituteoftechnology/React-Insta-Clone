import React from "react";
import { Header} from "../Styles/StylePost";
import PropTypes from 'prop-types'
const PostHeader = props => {
    return (

    <Header>
      <img
        className="thumbnail img"
        src={props.thumbnail}
        alt="user-thumbnail"
      />
      <h3>{props.username}</h3>
            </Header>

  );
};

// Error checking whats passed into the Post Container


PostHeader.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default PostHeader;
