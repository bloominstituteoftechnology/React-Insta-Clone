import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import Container from "react-bulma-components/lib/components/container";
import Heading from "react-bulma-components/lib/components/heading";
import Card from "react-bulma-components/lib/components/card";
import Image from "react-bulma-components/lib/components/image";
import PropTypes from "prop-types";
import "./PostContainer.scss";

const PostContainer = props => {
  return (
    <Container>
      {props.data.map((user, index) => {
        let comments = user.comments;
        return (
          <Card key={`card-${user.timestamp}`}>
            <Container className="flexify">
              <Image src={user.thumbnailUrl} size={32} className="roundOverride" />
              <Heading subtitle size={5} renderAs="h2">{user.username}</Heading>
            </Container>
            <Card.Image src={user.imageUrl} alt="Post" size="4by3" />
            <Card.Content>
              <CommentSection comments={comments} time={user.timestamp} belongsTo={user.username} />
            </Card.Content>
          </Card>
        );
      })}
    </Container>
  );
};

PostContainer.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string,
      })),
  
  }))
};

export default PostContainer;
