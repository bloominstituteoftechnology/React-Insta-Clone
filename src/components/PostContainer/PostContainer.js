import React from "react";
import "./PostContainer.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardHeader,
  CardSubtitle,
  CardFooter,
  Input
} from "reactstrap";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from 'prop-types';

const PostContainer = props => {
  let thumbStyle = {
    borderRadius: 100,
    height: 50,
    width: 50
  };

  return (
    <Card className="align-items-center">
      <CardBody>
        <CardHeader className="d-flex align-items-left">
          <CardImg
            width="10%"
            className="mr-3"
            src={props.user.thumbnailUrl}
            alt="userImage"
            style={thumbStyle}
          />
          <CardText className="cardUser">
            <strong>{props.user.username}</strong>
          </CardText>
        </CardHeader>

        <CardImg
          className="d-flex justify-content-center"
          src={props.user.imageUrl}
          alt="Card image cap"
        />

        <CardFooter>
          <div className="likeIcon">
            <i className="far fa-heart" />
            <i className="far fa-comment" />
          </div>
          <CardSubtitle className="d-flex align-items-left">
            <strong>{props.user.likes} likes</strong>
          </CardSubtitle>
          {props.user.comments.map((comment, i) => {
            return <CommentSection comment={comment} key={i} />;
          })}
          <Input placeholder="add a comment" />
        </CardFooter>
      </CardBody>
    </Card>
  );
};

PostContainer.propTypes = {
  thumbnailUrl:PropTypes.string,
  username:PropTypes.string,
  imageUrl:PropTypes.string,
  likes:PropTypes.number
}

export default PostContainer;
