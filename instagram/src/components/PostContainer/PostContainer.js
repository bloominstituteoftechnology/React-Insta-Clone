import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import styled from "styled-components";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import moment from "moment";


const PostHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin: 20px 5px;
`;
const AvatarImg = styled.img`
  border-radius: 50%;
  height: 40px;
  margin-right: 10px;
`;

const Likes = styled.h3`
  font-size: 14px;
  margin-bottom: 15px;
  font-weight: bold;
  margin-left: 3px;
  

`;

const BottomIcons = styled.div`
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  width: 70px;
  margin-bottom: 10px;
  
  .fa-heart {
    cursor: pointer;
  }
  .fa-comment {
    cursor: pointer;
  }
`;

const BottomBorder = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
  height: 80px;
  width: 100%;
  max-width: 800px;
  background-color: #e0e0e0;
  padding-top: 50px;
  box-sizing: border-box;
`;

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes,
      liked: false,
      commentClicked: false
    };
  }

  toggleLike = () => {
    let likeCounter = this.state.likes;
    if (this.state.liked === false) {
      likeCounter++;
      this.setState({
        likes: likeCounter,
        liked: true
      });
    } else {
      likeCounter--;
      this.setState({
        likes: likeCounter,
        liked: false
      });
    }
  };

  toggleComment = () => {
    if(this.state.commentClicked === false) {
      this.setState({ commentClicked: true})
    } else {
      this.setState({ commentClicked: false })
    }
  }

  render() {
    const fromNow = moment(
      this.props.post.timestamp,
      "MMMM Do YYYY, h:mm:ss a"
    ).fromNow();
    
    return (
      <div>
      
        <Card className={this.props.className}>
          <PostHeader>
            <AvatarImg src={this.props.post.thumbnailUrl} alt="avatar_img" />
            {this.props.post.username}
          </PostHeader>
          <CardImg
            top
            width="100%"
            src={this.props.post.imageUrl}
            alt="Card image cap"
          />
          <CardBody>
            <BottomIcons>
              <i className={this.state.liked ? "fas fa-heart red" : "far fa-heart"} onClick={this.toggleLike} />
              <i className={this.state.commentClicked ? "fas fa-comment" : "far fa-comment"} onClick={this.toggleComment}  />
            </BottomIcons>
            <Likes>{this.state.likes}</Likes>
            <p>{fromNow}</p>
            <CommentSection
              date={this.props.post.timestamp}
              comments={this.props.post.comments}
              commentClicked={this.state.commentClicked}
            />
          </CardBody>
        </Card>
        <BottomBorder />
      </div>
    );
  }
}

CommentSection.propTypes = { comments: PropTypes.array.isRequired };

export default PostContainer;

// "far fa-heart"