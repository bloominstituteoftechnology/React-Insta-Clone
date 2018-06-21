import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import '../instagram.css';
import { Card, CardImg, CardBody,
  CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';


class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.post.likes,
      liked: false,
      likeStyle:"fa-heart far"
    }
  }

  toggleLike = event => {
    let likes = this.state.likes;
    if (this.state.liked) {
    this.setState({likes: likes -=1, liked: false, likeStyle:"far fa-heart"})
  } else {
    this.setState({likes: likes +=1, liked: true, likeStyle:"fas fa-heart"})
  }
  }

  render() {
    console.log("fa-heart " + (this.state.liked ? "fas":"far"))
  return (
      <Card className="test">
        <CardBody className="card-header">
        <img className="thumb-image" src={this.props.post.thumbnailUrl} alt="" />
        <CardTitle className="username">{this.props.post.username}</CardTitle>
        </CardBody>
        <CardImg className="post-image" src={this.props.post.imageUrl} alt="" />
        <CardBody>
        <div className="post-buttons">
        <div className="left-buttons">
        <div className="like-button mx-2" onClick={this.toggleLike}><i className={this.state.likeStyle}></i></div>
        {/*<i className="fas fa-heart like-selected"></i>*/}
        <i className="far fa-comment" ></i>
        </div>
        <i className="far fa-bookmark"></i>
        {/*<i class="fas fa-bookmark"></i>*/}
        </div>
        <h5>{this.state.likes} likes</h5>
        <CommentSection comments={this.props.post.comments} />
        <h6>{this.props.post.timestamp}</h6>
        <hr/>
        <form onSubmit={this.props.addCommentHandler} value={this.props.index}>
        <input style={{width: 500 +'px'}} type="text" name="comment" placeholder="Add a comment..." value={this.props.value} onChange={this.props.commentChangeHandler} />
        </form>
        </CardBody>
      </Card>
  );
}

};

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number
  })
}

export default PostContainer;
