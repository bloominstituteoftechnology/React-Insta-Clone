import React, { Component } from 'react';
import CommentSection from '../../components/CommentSection/CommentSection';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';
import './PostContainer.css';

class PostContainer extends Component {
  constructor() {
    super();
  }
  render() {
    console.log("render postcontainer",this);
    return (
      <div className="PostContainer">
        {this.props.people.map(person => {
          return (
          <div className="people" key={person.timestamp}>
          <Card>
              <CardBody>
          <CardTitle>{person.username}</CardTitle>
          <CardImg src={person.thumbnailUrl} alt={person.username}/>
          <h4>{person.likes}</h4>
          <h4>{person.timestamp}</h4>
          <CommentSection comments={person.comments} />
          
          </CardBody>
          </Card>
          </div>);
        }
        )}
      </div>
    );
  }
};

export default PostContainer;