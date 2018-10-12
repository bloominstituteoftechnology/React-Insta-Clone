import React from "react";
import {
  BodyHeader,
  UserThumbnail,
  Username,
  BodyImage,
  BodySprites,
  BodySprite,
  LikeButton
} from "./../../Styles";

const Post = props => {
  return (
    <div>
      <BodyHeader>
        <UserThumbnail src={props.user.thumbnailUrl} alt="" />
        <Username bold>{props.user.username}</Username>
      </BodyHeader>
      <BodyImage className="post-image" src={props.user.imageUrl} alt="" />
      <BodySprites>
        <BodySprite className="far fa-heart" onClick={props.addLike} />
        <BodySprite className="far fa-comment" />
      </BodySprites>
      <LikeButton>{props.likes} likes</LikeButton>
    </div>
  );
};

export default Post;