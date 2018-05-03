import React from 'react';
import { 
    Card, 
    CardImg, 
    CardText, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    Row 
} from 'reactstrap';
import './Posts.css'
import CommentSection from '../CommentSection/CommentSection'

const Post = (props) => {
  return (    
      <Card>        
        <CardBody>
          <Row> 
            <CardImg 
              style={{borderRadius: 90}} 
              className="thumbnailUrl"  
              src={props.post.thumbnailUrl}
              alt="" 
            />          
            <CardSubtitle className="cardSubtitle">
              {props.post.username}
            </CardSubtitle>
          </Row>
        </CardBody>
        <CardImg               
              className="postImage"  
              src={props.post.imageUrl}
              alt="" 
            />     
          <CardBody>
            <CardText>
              <div>{props.post.likes}</div>
            </CardText>
            <CardText>
              {props.post 
                ? props.post.comments.map(comment => (
                    <CommentSection comment={comment} />
                ))
              : null}
            </CardText>
            <CardText>
              <div>{props.post.timestamp}</div>
            </CardText>
            <CardText>
                <div>{props.post.timestamp}</div>
            </CardText>
          </CardBody>
        </Card>
      );
    };
    
export default Post; 