import React from 'react';
import CommentSection from './CommentSection'
import InstaPost from './InstaPost'
import SearchBar from './SearchBar'

const PostContainer = (props) => {
    
    return (
        <div >
            
            {props.dummyData.map((item) => {
                return (<div>
                    <SearchBar />
                    <InstaPost instaPost={item}/> 
                    <CommentSection commentList={item.comments} times={item}/>
                </div>)
            })}
        </div>
    )
}

export default PostContainer