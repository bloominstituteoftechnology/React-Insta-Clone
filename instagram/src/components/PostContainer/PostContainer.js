import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import styled from "styled-components";

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 20px 5px;
`;
const AvatarImg = styled.img`
  border-radius: 50%;
  height: 40px;
  margin-right: 10px;
`;

const Likes = styled.h3`
  font-weight: bold;
  font-size: 14px;
`;

const BottomIcons = styled.div`
    font-size: 30px;

`
const PostContainer = props => {
  return props.data.map(post => {
    return (
      <div>
        
        <Card>
        <PostHeader>
          <AvatarImg src={post.thumbnailUrl} alt="avatar_img" />
          {post.username}
        </PostHeader>
          <CardImg
            top
            width="100%"
            src={post.imageUrl}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{props.data.username}</CardTitle>
            <BottomIcons>
            <i class="far fa-heart"></i>
            <i class="far fa-comment"></i>
            </BottomIcons>
            <Likes>{post.likes}</Likes>
            <CardText>
              {post.comment}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  });
  //   <div>
  //       <Card>
  //       <CardTitle>Card title</CardTitle>
  //     <CardImg top width="100%" src={props.data.imageUrl} alt="Card image cap" />
  //     <CardBody>
  //       <CardTitle>{props.data.username}</CardTitle>
  //       <CardSubtitle>Card subtitle</CardSubtitle>
  //       <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
  //     </CardBody>
  //   </Card>
  //   </div>
};

export default PostContainer;
