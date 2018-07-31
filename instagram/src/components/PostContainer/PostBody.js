import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostTop from './PostTop';
import './PostContainer.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
    import  like from "../../assets/likecons.png";

const PostBody = props => {
  return (
    <Card className="col">
      <CardBody>
      <PostTop  username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />
      <div className="pbody">
        <img alt="thumbnail"  className="pimage"  src={props.post.imageUrl} />
        <img alt="like comment icons"  className="likecons"  src={like} />
        <div className="likes">{props.post.likes} likes</div>
      </div>
    <div className="row">
      </div>

      <CommentSection comments={props.post.comments} />
    </CardBody>
    </Card>
  );
};

// idk if i even need to check typeof here.
// PostBody.propTypes = {
//   comments: PropTypes.arrayOf(
//     PropTypes.shape({
//        text: PropTypes.string,
//       username: PropTypes.string})
//   )
// };

export default PostBody;
