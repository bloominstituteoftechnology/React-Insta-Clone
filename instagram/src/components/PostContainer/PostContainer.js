import React, { Component } from "react";
import { Fragment } from "react";
import CommentSection from "../CommentSection/CommentSection";
import "../PostContainer/PostContainer.css";
import PropTypes from "prop-types";
import { Card, CardBody, CardSubtitle, Row } from "reactstrap";

const PostContainer = props => {
  return (
    <div className="postContainer">
      {props.data.map(
        post => (
          console.log(post),
          (
            <div key={post.timestamp}>
              <Card className="container">
                <CardBody>
                  <Row>
                    <img className="img-thumbnail"
                      style={{ borderRaidus: 90 }}
                      src={post.thumbnailUrl}
                      alt=""
                    />
                    <CardSubtitle>{post.username}</CardSubtitle>
                  </Row>
                </CardBody>
                <img src={post.imageUrl} alt="" />

                <h2>{post.timestamp}</h2>
                <h2>{post.likes}</h2>

                {post.comments.map(comment => {
                  return (
                    <CommentSection key={comment.text} coolData={comment} />
                  );
                })}
              </Card>
            </div>
          )
        )
      )}
    </div>
  );
};

PostContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ timestamp: PropTypes.string, username: PropTypes.string })
  )
};

export default PostContainer;
