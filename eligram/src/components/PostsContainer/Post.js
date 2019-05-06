import React from 'react';
import PostHeader from './PostHeader';
import CommentContainer from '../CommentSection/CommentContainer';
import PropTypes from 'prop-types';
import LikeSection from './LikeSection';


class Post extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           // likes: props.post.likes will go here
        };
    }

        //--forgot syntax look up
    // enter function to increase likes by 1 ie this.state.likes ++
   render() {
        return(
         <div className = "post">
            <PostHeader username={this.props.post.username}
             thumbnailUrl = {this.props.post.thumbnailUrl}  /> 
            

          <div className = "image">
              <img alt = "Post Image" classname ="image" src={this.props.post.imageUrl} />
              
        

            </div>
        

       <LikeSection />
        <CommentContainer
            postId = {this.props.post.imageUrl}
            comments = {this.props.post.comments} />
          
     );
    }

}

Post.PropTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
};

export default Post;