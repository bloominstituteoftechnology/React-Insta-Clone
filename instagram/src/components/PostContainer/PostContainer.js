import React from 'react';
import './post-container.css';

const PostContainer = props => {

    console.log("from post container", props);
 

    return(
        <div className="body-container">
                {props.postsData.map( post => (
                  <div className="post">
                    <div className="post-header">
                      <img className="profile-pic" src={post.thumbnailUrl} />
                      <h1 className="username">{post.username}</h1>
                    </div>
                  </div>


                ))}
        </div>

    )
}








export default PostContainer;