import React from 'react';



const Post = props =>{
    // console.log(props)
    return (
      <div className="post">
        <div className="post-header">
            <img src={props.thumbnailUrl}/>
            <p className="font-weight-bold">{props.username}</p>
        </div>
        <div className="post-img">
            <img src={props.imageUrl} alt=""/>
        </div>
        {/* <CommentSection handleChanges={props.post.handleChanges} timeStamp={props.post.timestamp} likes={props.post.likes} comments={props.post.comments} />  */}
      </div>
    );
}



export default Post;
