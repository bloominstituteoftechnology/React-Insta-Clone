import React from 'react';
import PostHeader from './PostHeader';
import CommentContainer from '../CommentSection/CommentContainer';
import PropTypes from 'prop-types';
import LikeSection from './LikeSection';


class Post extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            //likes: props.post.lies will go here
        };
    }

        //--forgot syntax look up
    // enter function to increase likes by 1 ie this.state.likes ++
   render() {
    return(
        // <div classname = "post">
        //     {/* /*<PostHeader  //username={this.props.post.username} thumbnailUrl= /> */}
            
        // </div>

        // <div className = "image">
        //     {/* //<img alt, classname, src{this.props.post.imgURL} */}
        // </div>

        // {/* <LikeSection />
        // <CommentSection
        //     postId = {this.props.post.imageUrl}
        //     comments =  */}
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