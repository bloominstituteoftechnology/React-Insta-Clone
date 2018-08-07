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
import CommentSection from "../CommentSection/CommentSection";
import CommentForm from "../CommentSection/CommentForm";
import PropTypes from 'prop-types';
import moment from "moment";

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
  
  font-size: 20px;
  margin-bottom: 30px;
  margin-left: 12px;
  font-family: "Lobster Two", "CRoboto";
`;

const BottomIcons = styled.div`
    font-size: 30px;
    margin-top: -20px;
    display: flex;
    justify-content: space-between;
    width: 70px;
    margin-bottom: 10px;

`

const BottomBorder = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  height: 80px;
  width: 100%;
  max-width: 800px;
  background-color: #e0e0e0;
  padding-top: 50px;
  box-sizing: border-box;
`;

const PostContainer = props => {
  return props.data.map(post => {
    const fromNow = moment(post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()
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
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            </BottomIcons>
            <Likes>{post.likes}</Likes>
            <p>{fromNow}</p>
              <CommentSection date={post.timestamp} comments={post.comments} />
          </CardBody>
        </Card>
        <BottomBorder></BottomBorder>
      </div>
    );
  });

};

CommentSection.propTypes = {comments: PropTypes.array.isRequired}

export default PostContainer;
