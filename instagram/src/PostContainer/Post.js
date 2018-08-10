import React from 'react';;
import PropTypes from 'prop-types';
import PostContent from './PostContent';
import Likes from '../CommentSection/Likes';
import CommentSection from '../CommentSection/CommentSection';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.posts.likes,
        };
    }

    likeIncrementation = () => {
        let likes = this.state.likes + 1;
        this.setState({likes});
    }


    render(){
        return(
            <React.Fragment>
            <PostContent /> 
            
            <Likes />

           <CommentSection 
             postId={this.props.post.imageUrl}
             comments={this.props.post.comments}   
            />
            </React.Fragment>
             
        )

        
    } 
        
}

Post.PropTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string
    })
}


export default Post;