import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostTop from './PostTop';
import './PostContainer.css';
import PropTypes from "prop-types"
import  Likes from './likes'
import  like from "../../assets/likecons.png";
import liked from "../../assets/likedcons.png"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';

class PostBody extends React.Component {
  constructor(props){
    super(props);
    this.state = { likes: props.post.likes}
  }
  incrementLike = () => {
  let likes = this.state.likes + 1;
  this.setState({ likes });
};

render(){
  return (
    <Card >
      <PostTop  username={this.props.post.username} thumbnailUrl={this.props.post.thumbnailUrl} />
        <img alt="thumbnail"  className="pimage"  src={this.props.post.imageUrl} />
      <CardBody>

        <Likes
          incrementLike={this.incrementLike}
          likes={this.state.likes}
        />

      <CommentSection comments={this.props.post.comments} />
    </CardBody>
    </Card>
  );
}
};
PostBody.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};


export default PostBody;
