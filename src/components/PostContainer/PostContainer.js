import React from "react";
import "./PostContainer.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  let thumbStyle = {
    borderRadius: 100,
    height: 50,
    width: 50
  };

  return (
    <Card>
      <CardBody>
        <CardImg
          width="10%"
          src={props.user.thumbnailUrl}
          alt="userImage"
          style={thumbStyle}
        />
        <CardTitle>{props.user.username}</CardTitle>
        <CardImg width="40%" src={props.user.imageUrl} alt="Card image cap" />
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardSubtitle>{props.user.likes} likes</CardSubtitle>

        {props.user.comments.map((comments, i) => {
          return <CommentSection comments={comments} key={i} />;
        })}
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export default PostContainer;
