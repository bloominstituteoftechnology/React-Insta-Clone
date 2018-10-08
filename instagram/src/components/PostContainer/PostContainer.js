import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from '../PostHeader/PostHeader';
import LikesBar from '../LikesBar/LikesBar';
import NewCommentSection from '../NewCommentSection/NewCommentSection';


const PostContainer = props =>{
    console.log(props)
    return(
        <div className='post-container'>
            <PostHeader data={props.data}/>
            <img src={props.data.imageUrl}></img>
            <LikesBar data={props.data} />
            {
                props.data.comments.map(element =>{
                    return (
                        <CommentSection data={element}/>
                    )
                })
            }
            <NewCommentSection />
        </div>

    )
}
export default PostContainer;

