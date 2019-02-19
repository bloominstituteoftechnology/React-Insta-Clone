import React from 'react';
import CommentSection from './CommentSection'
import InstaPost from './InstaPost'

const PostContainer = (props) => {
    
    return (
        <div>
            
            {props.dummyData.map((item) => {
                return (<div>
                    <InstaPost instaPost={item}/> 
                <CommentSection commentList={item.comments} />
                </div>)
            })}
        </div>
    )
}

export default PostContainer