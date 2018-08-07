
import React from '../../node_modules/react';
import CommentSection from './CommentSection';

const PostContainer = props => {
    return (
        <div>
            <div>
              <img alt="user logo" className="logo" src={props.content.thumbnailUrl}></img>
              {props.content.username}
            </div>
            <br></br>
            <div>
              <img alt="main post" src={props.content.imageUrl}></img>
              <i class="far fa-heart"></i>
              <i class="far fa-comment"></i>
            </div>
  
            <div>
              <p>{props.content.likes} likes</p>
            </div>
  
            <comments>
              <div>{props.content.comments.map(each => <CommentSection comments={each} />)}</div>
            </comments>
            <br></br>
            <add>
              <input type="text" placeholder="Add a comment..."></input>
            </add>
        </div>
      
    )
  };


  export default PostContainer;