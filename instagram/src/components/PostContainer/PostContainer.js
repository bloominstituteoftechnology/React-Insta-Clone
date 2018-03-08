import React, { Component } from "react";
import PropTypes from "prop-types";

import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection.js";
import { CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";

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
          <CardSubtitle className="font-weight-bold">
            {this.props.data.likes} Likes
          </CardSubtitle>

          {<CommentSection comments={this.props.data.comments} />}
          <small className="text-muted">{this.props.data.timestamp}</small>
        </CardBody>
      </div>
    );
  }
}

PostContainer.propTypes = {
  data: PropTypes.object
};
