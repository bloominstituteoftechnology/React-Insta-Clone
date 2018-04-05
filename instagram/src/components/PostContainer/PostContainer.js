import React from 'react';
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  CardImg
} from 'reactstrap';
import './PostContainer.css';

const PostContainer = props => {
    return <div className="postContainerDiv">
        {props.dataProp.map((data, index) => (
          <div key={'post ' + index} className="postContainer">
            <Card>
              <CardHeader>
                <img
                  src={data.thumbnailUrl}
                  alt={data.username + ' profile image'}
                  className="thumbnail"
                />
                <span>{data.username}</span>
              </CardHeader>
              <CardImg
                src={data.imageUrl}
                alt={data.username + 'post image'}
              />
              <CardBody>
                <div>
                  <i className="far fa-heart fa-2x postLike" />
                  <i className="far fa-comment fa-2x" />
                </div>
                <div>
                  <p className="likesNumber">{`${data.likes} likes`}</p>
                </div>
              </CardBody>
              
            </Card>
          </div>
        ))}
      </div>;
}

export default PostContainer;
