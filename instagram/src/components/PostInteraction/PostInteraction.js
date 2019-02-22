import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../PostInteraction/postinteraction.css";

const PostInteraction = ({ setLikes, likes }) => {
  const [liked, setIfLiked] = useState(false);

  const AddLike = () => {
    if (!liked) {
      setLikes(prevLikes => prevLikes + 1);
      setIfLiked(true);
    }
  };

  return (
    <div className="postInteractions">
      <FontAwesomeIcon
        icon={["far", "heart"]}
        size="2x"
        className="interactionIcons"
        onClick={AddLike}
      />
      <FontAwesomeIcon
        icon={["far", "comment"]}
        size="2x"
        className="interactionIcons"
      />
      <p className="likes">{likes} likes</p>
    </div>
  );
};

export default PostInteraction;
