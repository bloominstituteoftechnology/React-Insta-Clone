import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostsHeader from "./PostsHeader";
import LikeContainer from "./LikeContainer";
import PropTypes from "prop-types";
import sc from 'styled-components';

const PostDiv = sc.div`
  border: 1px solid #d3d3d3;
  margin: 15px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;
const PostImgImg = sc.img`
  height: 100%;
  width: 100%;
`;

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        };
    }
    addLike = () => {
        const newLike = this.state.likes +1;
        this.setState({
            likes: newLike
        });
    };


    render() {
        return (
            <PostDiv>
                <PostsHeader
                    username={this.props.post.username}
                    thumbnailUrl={this.props.post.thumbnailUrl}
                />
                <PostImgImg
                    src={this.props.post.imageUrl}
                    alt='thumbnail for post'
                />
                <LikeContainer
                    addLike={this.addLike}
                    likes={this.state.likes}
                />
                <CommentSection
                    comments={this.props.post.comments}
                    idPost={this.props.post.imageUrl}
                />        
            </PostDiv>
        );
    }    
}

Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string
    })
}

export default Post;