import React from 'react';
import CommentSection from './CommentSection'
import InstaPost from './InstaPost'
import SearchBar from './SearchBar'



const PostContainer = (props) => {
    
    return (
        <div className='postfeed'>
        
            {props.postData.map((item) => {
                return (<div className='postt'>
                    <InstaPost instaPost={item}/> 
                    <CommentSection  commentList={item.comments} obj={item}/>
                </div>)
            })}

        </div>

        
    )
}

export default PostContainer

