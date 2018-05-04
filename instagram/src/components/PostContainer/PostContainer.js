import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap'

import dummyData from '../../dummy-data'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
  return (
    <div>
      {dummyData.map((post, index) => (
        <Card key={`${post.username}.${index}`}>
          <CardBody>
            <img src={post.thumbnailUrl} />
          </CardBody>
          <img width="60%" src={post.imageUrl} alt="Card cap" />
          <h6>{post.likes} likes</h6>
          <CardBody>
            <CommentSection comments={post.comments} />
          </CardBody>
          <h6>{post.timestamp}</h6>
          <input placeholder="Add Comment" type="text" />
        </Card>
      ))}
    </div>
  )
}

export default PostContainer
