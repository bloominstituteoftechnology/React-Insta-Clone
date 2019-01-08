import React from 'react';
import {Card, CardImg, CardBody, Media} from 'reactstrap';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import heart from './img/icons8-heart-50.png';
import bubble from './img/icons8-speech-bubble-50.png';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };

  render() {
    return (
      <div>
        <Card className='card'>
          <Media>
            <Media className='img-thumbnail' src={this.props.post.thumbnailUrl}/>
            <div className='username'>{this.props.post.username}</div>
          </Media>
          <CardImg src={this.props.post.imageUrl} />
          <CardBody>
            <div className='like-message-icons'>
              <div>
                <img src={heart} height='32px' width='32px' onClick={this.incrementLike}/>
                <img src={bubble} height='32px' width='32px'/>
              </div>
              <div>{this.state.likes} likes</div>
            </div>
            <CommentSection comments={this.props.post.comments} timestamp={this.props.post.timestamp}/>
          </CardBody>
        </Card>
      </div>
    );
  }
};

export default Post;
