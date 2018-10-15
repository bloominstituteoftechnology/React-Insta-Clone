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
                    <h3>{data.likes} likes</h3>
                    <p>{data.timestamp}</p>
                    <CommentSection comment={props.dummyData}/>
                </div>
               
            )
        }

        )}
 

        </div> 
    )
}
 
export default PostContainer;