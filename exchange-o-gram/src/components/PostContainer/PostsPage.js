import React from 'react';
import PostContainer from './PostContainer.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';
//import './PostContainer.css'

const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const PostContainers = styled.div`
    width: 100%;
`;

class PostsPage extends React.Component{
    render(){
        return(
            <PostsContainer>
                {this.props.posts.map((post, index)=>{
                return(
                    <PostContainers key={post.timestamp}>
                        <PostContainer index={index} post={post} addLike={this.props.addLike} addNewComment={this.props.addNewComment} deleteComment={this.props.deleteComment}/>
                    </PostContainers>
                )
                })}
            </PostsContainer>
        )
        
    }
}

PostsPage.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    })),
    displayInfo: PropTypes.bool,
    addLike: PropTypes.func.isRequired,
    addNewComment: PropTypes.func.isRequired,
    searchPosts: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired
}

export default PostsPage;