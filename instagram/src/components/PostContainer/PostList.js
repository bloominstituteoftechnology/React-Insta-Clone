import React from 'react';
import './Post.css';
import PostContainer from './PostContainer';
const PostList = (props) => {
    return (
        <div className='post-list-container'>
            {props.instaData.map((dataItem, i) => {
                return <PostContainer dataItem={dataItem} 
                    key={i}
                    index={i}
                    changeCommentHandler={props.changeCommentHandler}
                    addCommentHandler={props.addCommentHandler}
                    addLikeHandler = {props.addLikeHandler} />
            })}
        </div>
    );
}




export default PostList;