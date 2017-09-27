import React from 'react';
import { Card,
  CardHeader,
  CardHeaderTitle,
  Image,
  CardImage,
  CardContent,
  Media,
  MediaContent,
  MediaRight,
  Subtitle,
  Content,
  Icon
  } from 'bloomer';
import moment from 'moment';

import '../Styles/PostContainer.css';
import CommentSection from './CommentSection';

const PostContainer = ({postData, handleClick}) => {
  const likePost = () => {
    handleClick(postData);
  }
  const timeStamp = Date.parse(postData.timestamp.split(',')[0].replace('th', ''));
  return (
    <Card style={{marginBottom: '25px'}}>
      <CardHeader>
        <Image isSize="64x64" src={postData.thumbnailUrl} className="Round-Image" />
        <CardHeaderTitle>{postData.username}</CardHeaderTitle>
      </CardHeader>
      <CardImage>
        <Image src={postData.imageUrl} />
      </CardImage>
      <CardContent>
        <Media>
          <MediaContent>
            <span>
              <Icon isSize="medium" onClick={likePost}>
                <span className="fa fa-lg fa-heart-o" />
              </Icon>
              <Icon isSize="medium">
                <span className="fa fa-lg fa-comment-o" />
              </Icon>
            </span>
            <Subtitle>{postData.likes} likes</Subtitle>
          </MediaContent>
          <MediaRight>
            <p>{moment(timeStamp).fromNow()}</p>
          </MediaRight>
        </Media>
        <Content>
          <CommentSection comments={postData.comments}/>
        </Content>
      </CardContent>
    </Card>
  );
};

export default PostContainer;
