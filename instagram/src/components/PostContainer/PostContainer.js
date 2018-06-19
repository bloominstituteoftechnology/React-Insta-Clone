import React from "react";
import {
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import CommentSection from "../CommentSection/CommentSection";
import moment from "moment";

const PostContainer = props => {
  return (
    <div>
      <Card>
        <CardHeader>
          <img src={props.thumbnail} alt="" class="img-thumbnail" />

          <strong>{props.username}</strong>
        </CardHeader>
        <CardImg width="100%" src={props.image} alt="" />
        <CardBody>
          <CardTitle>
            <i class="far fa-heart" />
            <i class="far fa-comment" />
          </CardTitle>
          <CardSubtitle>
            <strong>{props.likes} likes</strong>
          </CardSubtitle>
          <CommentSection comments={props.comments} />
          <CardSubtitle className="text-muted text-uppercase">
            {moment(props.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default PostContainer;
