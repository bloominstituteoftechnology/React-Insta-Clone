import React from 'react'; 
import CommentSection from '../CommentSection/CommentSection'; 
import Likes from './Likes'; 
import PropTypes from 'prop-types';

import './PostContainer.css';
import '../CommentSection/CommentSection.css';


class Post extends React.Component {

 constructor(props) {
   super(props); 
   this.state = {
     likes: props.post.likes 
   }
  } 

   addLike = () => {
     let likes = this.state.likes + 1; 
     this.setState({ likes }); 
   }

 
    render (){
    return(
        <div className="postWrapper">
            
          <div className="postHeader">
                <img className="thumbnail" src={this.props.post.thumbnailUrl}/>

                <p className="postUsername">{this.props.post.username}</p>
          </div>

          <img className="postImage" src= {this.props.post.imageUrl} />

          <Likes addLike={this.addLike} likes={this.state.likes} /> 

          <div className="comments">
            <CommentSection comments={this.props.post.comments}/>
          </div>

        </div>
    );
    }
}; 

Post.propTypes = {
    post: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number,
        timestamp: PropTypes.string, 
        comments: PropTypes.arrayOf(
            PropTypes.shape({
              username: PropTypes.string.isRequired,
              text: PropTypes.string.isRequired
            })
          ).isRequired
      })
    ).isRequired
  };
  
  // Just in case we haven't gotten data back, going to do a default prop array
  Post.defaultProps = {
    post: []
  };

export default Post; 