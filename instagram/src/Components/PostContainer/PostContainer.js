import React from 'react';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection.js';
import Post from './Post.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerPost = styled.div`

  ${props => props.display ? 'flex': 'hide'}
  display: flex;
  flex-direction: column;
  border: 1px solid #E8E8E8;
  border-radius: 4px;
  width: 602px;
  margin: 20px auto;
`

const PostContainer = (props) => {
  console.log(props.user)

  return (

    <React.Fragment>

      {props.posts.map( post => {

        return (

          <div key={post.username} className={props.searchItem.includes(post.username) === true ?
             'post-container' : 
             props.searchItem.length === 0 ? 'post-container' :
              'post-container hide'}>

            <Post 
              // key={post.username} 
              postData={post}
              searchItem={props.searchItem}
            />

            <CommentSection 
              // key={post.username}
              user={props.user}
              likes={post.likes}
              comments={post.comments}
              timestamp={post.timestamp}
            />
          </div>
        )
      })}
    </React.Fragment>
  );
}

export default PostContainer;