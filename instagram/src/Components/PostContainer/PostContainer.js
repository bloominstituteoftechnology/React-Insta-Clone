import React from 'react';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection.js';
import Post from './Post.js';
import PropTypes from 'prop-types';

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