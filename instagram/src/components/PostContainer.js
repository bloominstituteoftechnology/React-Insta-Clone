import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection';
import Post from './Post';
import Icons from "./Icons"


const PostContainer = (props) => {
  if (!props.dummyData.length) {
    return <h1>Loading...</h1>
  }
  
  return (
    <div className="post">
      <div>
        {props.dummyData.map( postObj => {
          return (
            <div key={postObj.timestamp}>
              <Post
                thumbnail={postObj.thumbnailUrl}
                image={postObj.imageUrl}
                username={postObj.username}
                />
              <Icons increment={props.increment}/>
              <p className="likes"> {props.likes} likes</p>
              <div className="comments-container">
                <CommentSection comments={postObj.comments} />
              </div>
              <p className="time">2 HOURS AGO</p>
            </div>
          )
        })}
      </div>
    </div>
  ) 
}

PostContainer.propTypes = {
  dummyData: PropTypes.array.isRequired
}

export default PostContainer;