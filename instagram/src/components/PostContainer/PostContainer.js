import React from "react";
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import { Button } from 'reactstrap';
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
    return (
   
     <div className='card-box'>
     {props.dummyData.map(user =>(
              <Card>
        <CardBody className='card-body'>
          <CardTitle className='username'><img className='userthumb' width="100%" src={user.thumbnailUrl} alt="userthumb" />{user.username}</CardTitle>
          <CardSubtitle>          </CardSubtitle>
        </CardBody>
        <img width="100%" src={user.imageUrl} alt="Card image cap" />
        <CardBody>
        <Button color="link"><img className='icon-heart' src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png" /></Button>
        <Button color="link"><img className='icon-chat' src="https://www.shareicon.net/data/2015/09/18/642612_message_512x512.png" /></Button>
          <CardText className='likes'>{user.likes} likes</CardText>
          <CommentSection className='comment-box' comments={user.comments} />
            <CardText>
            <small className="text-muted">{user.timestamp}</small>
                 </CardText>
      <InputGroup>
        <Input className='input' placeholder="Add a comment..."/>
        <InputGroupAddon addonType="append">
          <InputGroupText className='comment-button'>...</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
        </CardBody>
        </Card>
        ))}
      </div>
    
    );
};

export default PostContainer;
