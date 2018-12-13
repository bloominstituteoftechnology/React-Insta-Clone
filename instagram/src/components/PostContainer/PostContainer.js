import React from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import Container from "react-bulma-components/lib/components/container";
import Heading from "react-bulma-components/lib/components/heading";
import Card from "react-bulma-components/lib/components/card";
import Image from "react-bulma-components/lib/components/image";
import "./PostContainer.scss";

const PostContainer = props => {
  return (
    <Container>
      {props.data.map((user, index) => {
        let comments = user.comments;
        return (
          <Card key={`card-${index}`}>
            <Container className="flexify">
              <Image src={user.thumbnailUrl} size="32x32" className="roundOverride" />
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

export default PostContainer;
