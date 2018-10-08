import React from 'react';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from '../PostHeader/PostHeader';
import LikesBar from '../LikesBar/LikesBar';
import NewCommentSection from '../NewCommentSection/NewCommentSection';


const PostContainer = props =>{
    console.log(props)
    return(
        <div className='post-container'>
            <PostHeader data={props.data}/>
            <img className='post-container-image' src={props.data.imageUrl}></img>
            <LikesBar data={props.data} />
            {
                props.data.comments.map(element =>{
                    return (
                        <CommentSection data={element}/>
                    )
                })
            }
            <p className='post-time-stamp'>{props.data.timestamp}</p>
            <NewCommentSection />
            <br />
            <br />
        </div>

    )
}
export default PostContainer;

