import React from 'react';
import CommentSection from '../CommentSection/commentSection'

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
                    <CommentSection item={data}/>
                </div>
               
            )
            {
                data.comments.map(index => {
                  return (
                    <h3>{index.username}<span className="comment"> {index.text}</span></h3>
                  )
                })
              }

        }

        )}
 

        </div> 
    )
}
 
export default PostContainer;