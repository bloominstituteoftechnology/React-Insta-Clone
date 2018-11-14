import React from 'react';

const Post = (props) =>{
  return (
    <React.Fragment>
        <div className={`post-header`}>
          <img src={props.postData.thumbnailUrl} alt='user icon'/>
          <h3>{props.postData.username}</h3>
        </div>

        <img className={'post-img'} src={props.postData.imageUrl} alt='instagram'/>
    </React.Fragment>
  )
}

export default Post;