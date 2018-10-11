import React from "react";
import "./PostContainer.css";

import { Header,  } from "../Styles/StylePost";

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

export default PostHeader;
