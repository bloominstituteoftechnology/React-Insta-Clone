import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import unliked from "../../assets/like.png";
import liked from "../../assets/liked.png";
import comment from "../../assets/comment.png";
import moment from "moment";
import {
  Post,
  PostHeader,
  UserThumbnailWrapper,
  UserThumbnail,
  AddComment,
  CommentInput,
  Image,
  ButtonWrapper,
  Button,
  MainText,
  Timestamp,
  Bold
} from "./post-styles";

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      comment: "",
      focused: false,
      liked: false
    };
  }
  componentDidMount() {
    this.setState({liked: this.props.liked(this.props.post.id)})
  }

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleAddComment = e => {
    if (e.keyCode === 13 && this.state.comment) {
      this.props.handleAddComment(this.state.comment, this.props.post.id);
      this.setState({ comment: "" });
    }
  };

  handleLikeToggle = () => {
    this.setState(prevState => (
      { liked: !prevState.liked}
    ), () => this.props.handleLike(this.state.liked, this.props.post.id))
  }

  onBlur = e => {
    this.setState({ focused: false });
  };

  focusTextInput = () => {
    this.setState({ focused: true });
    this.textInput.current.focus();
  };

  render() {
    return (
      <Post>
        <PostHeader>
          <UserThumbnailWrapper>
            <UserThumbnail src={this.props.post.thumbnailUrl} alt="thumbnail" />
          </UserThumbnailWrapper>
          <Bold> {this.props.post.username} </Bold>
        </PostHeader>
        <Image
          src={this.props.post.imageUrl}
          alt="main"
        />
        <MainText>
          <ButtonWrapper>
            <Button
              src={this.state.liked ? liked : unliked}
              onClick={this.handleLikeToggle}
              alt="liked"
            />
            <Button src={comment} alt="comment" onClick={this.focusTextInput} />
          </ButtonWrapper>
          <Bold> {this.props.post.likes} likes </Bold>
          {this.props.post.comments.map((comment, index) => (
            <CommentSection
              username={this.props.username}
              key={index}
              comment={comment}
              onClick={() =>
                this.props.handleDeleteComment(comment.id, this.props.post.id)
              }
            />
          ))}
          <Timestamp>
            {moment(this.props.post.timestamp, "MMMM Do YYYY, hh:mm:ss")
              .fromNow()
              .toUpperCase()}
          </Timestamp>
        </MainText>
        <AddComment focused={this.state.focused}>
          <CommentInput
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            innerRef={this.textInput}
            type="text"
            value={this.state.comment}
            placeholder="Add a comment..."
            onChange={this.handleChange}
            onKeyDown={this.handleAddComment}
          />
        </AddComment>
      </Post>
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array,
  }),
};
export default PostContainer;
