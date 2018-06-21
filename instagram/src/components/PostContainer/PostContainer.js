import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import '../instagram.css';
import { Card, CardImg, CardBody,
  CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledThumbnail = styled.img`
border-radius: 50%;
max-width: 50px;
max-height: 50px;
margin-left: 10px;
margin-right: 10px;
`;

const StyledCardImage = styled.img`
height: 600px;
width: 600px;
`;

const PostConWrapper = styled.div`
width: 600px;
margin: auto;
margin-top: 20px;
margin-bottom: 20px;
`;

const StyledCardHeader = styled.span`
display: flex;
justify-content: flex-start;
align-items: center;
`;

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.post.likes,
      liked: false,
      likeStyle:"fa-heart far",
      comments: this.props.post.comments
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

  deleteComment = event => {
    console.log(event.target.getAttribute('index'));
  }

  render() {
    console.log("fa-heart " + (this.state.liked ? "fas":"far"))
  return (
      <PostConWrapper>
      <Card>
        <CardBody className="card-header">
          <StyledThumbnail src={this.props.post.thumbnailUrl} alt="" />
          <CardTitle className="username">{this.props.post.username}</CardTitle>
        </CardBody>
        <StyledCardImage src={this.props.post.imageUrl} alt="" />
        <CardBody>
        <div className="post-buttons">
        <div className="left-buttons">
        <div className="like-button mx-2" onClick={this.toggleLike}><i className={this.state.likeStyle}></i></div>
        <i className="far fa-comment" ></i>
        </div>
        <i className="far fa-bookmark"></i>
        </div>
        <h5>{this.state.likes} likes</h5>
        <CommentSection deleteCommentHandler={this.deleteComment} comments={this.props.post.comments} />
        <h6>{this.props.post.timestamp}</h6>
        <hr/>
        <form onSubmit={this.props.addCommentHandler} value={this.props.index}>
        <input style={{width: 500 +'px'}} type="text" name="comment" placeholder="Add a comment..." value={this.props.value} onChange={this.props.commentChangeHandler} />
        </form>
        </CardBody>
      </Card>
      </PostConWrapper>
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
