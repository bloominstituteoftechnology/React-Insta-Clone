import React from 'react';
import PostHeader from './PostHeader';
import CommentContainer from '../CommentSection/CommentContainer';
import PropTypes from 'prop-types';
import LikeSection from './LikeSection';


class Post extends React.Component {
    constructor(props){
        super(props);
        this.state ={

        }
    }
   render() {
    return(
        <div classname = "post">
            <PostHeader />
            {/* //username={this.props.post.username} thumbnailUrl= */}
        </div>

        <div className = "image">
            {/* //<img alt, classname, src{this.props.post.imgURL} */}
        </div>

        {/* <LikeSection />
        <CommentSection
            postId = {this.props.post.imageUrl}
            comments =  */}
    );
}

}
export default Post;