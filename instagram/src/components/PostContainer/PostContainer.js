import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
    return (
        <div className = 'postContainer'>
        {props.dummyData.map (data => {
            return (
                <div className = 'posts'>
                    <h3> {data.username}</h3>
                    <img src ={data.thumbnailUrl}/>
                    <img src ={data.imageUrl}/>
                    <h3>{data.likes}</h3>
                    <p>{data.text}</p>
                </div>
                <div className = 'comments'>
                    <CommentSection />
                </div>
            )
        }
        
        
        
        
        
        )}
 

        </div> 
    )
}
 
export default PostContainer;