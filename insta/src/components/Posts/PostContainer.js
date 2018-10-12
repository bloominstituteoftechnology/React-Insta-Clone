import React, { Component }  from 'react';
import CommentSection from './CommentSection';
import Post from './Post';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//Styled components
const PostWell = styled.section `
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
`;

const PostTunnel = styled.section `
    margin: 30px 0;
    border: 2px solid #ecf0f1;
`;

class PostContainer extends Component {
    render() {
        return (
            <PostWell>
                {this.props.posts.map(post => (
                    <PostTunnel key={post.timestamp}>
                        <Post post={post} />
                        <CommentSection 
                            comments={post.comments} 
                            likes={this.props.likes[post.index]} 
                            index={post.index} 
                            commentInput={this.props.commentInput} 
                            handleSubmit={this.props.handleSubmit} 
                            addNewComment={this.props.addNewComment} 
                            newLike={this.props.newLike}
                        />
                    </PostTunnel>
                ))}
            </PostWell>
        );
    }
}

PostContainer.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object)
};

export default PostContainer;