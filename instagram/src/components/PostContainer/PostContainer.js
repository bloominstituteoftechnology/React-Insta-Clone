import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection.js";
import {
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";

export default class PostContainer extends Component {
  render() {
    console.log("Post Container props", this.props.data.comments);
    return (
      <div>
        <CardBody>
          <CardTitle>
            <img
              className="thumbnail"
              src={this.props.data.thumbnailUrl}
              alt="Thumbnail"
            />
            {this.props.data.username}
          </CardTitle>
        </CardBody>
        <CardImg
          width="100%"
          src={this.props.data.imageUrl}
          alt="Card image cap"
        />
        <CardBody>
          <CardText>
            <i class="far fa-heart fa-lg mr-3" />
            {"    "} <i class="far fa-comment fa-lg" />
          </CardText>
          <CardSubtitle className="font-weight-bold">
            {this.props.data.likes} Likes
          </CardSubtitle>

          {<CommentSection comments={this.props.data.comments} />}
          <small className="text-muted">{this.props.data.timestamp}</small>
          <InputGroup id="comment-form">
            <Input id="comment-field" placeholder="Add a comment..." />
            <InputGroupAddon addonType="append">
              <Button id="comment-button">...</Button>
            </InputGroupAddon>
          </InputGroup>
        </CardBody>
      </div>
    );
  }
}

PostContainer.propTypes = {
  data: PropTypes.object
};
