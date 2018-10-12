import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comments from "../CommentSection/Comments";
import'./Post.css';
import PostIcon from './PostIcon';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  justify-content:row;
  width:100%;
  max-width:940px;
  margin:0 auto;
`;

class Posts extends Component {
  render() {
    return (  
      <Container>
        <div className="post-lists">
          {this.props.posts.map(post => {
              return[
                <div key={post.username} className="post-container">
                <div className="post-header">
                  <img  className ="round" src={post.thumbnailUrl} alt="thumbnail"/>
                  <h3>{post.username}</h3>
                </div>
                <div className="post-body">
                  <img src={post.imageUrl} alt="post"/>
                </div>
                <PostIcon likes ={post.likes}/>
                <>
                  <Comments comments={post.comments} />
                </>
                </div>
              ] 
            })}
        </div>
      </Container>
    );
  }
}

Posts.PropTypes ={
  posts:PropTypes.arrayOf(PropTypes.shape({
    username:PropTypes.string,
    thumbnailUrl:PropTypes.string,
    imageUrl:PropTypes.string,
    comments:PropTypes.array
  }))
}

 
export default Posts;