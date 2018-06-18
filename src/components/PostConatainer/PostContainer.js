import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const PostContainer = (props) => {
  console.log(props);
    return (
    <div>
      <Card>
      <CardTitle></CardTitle>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardText>Comments list</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default PostContainer;