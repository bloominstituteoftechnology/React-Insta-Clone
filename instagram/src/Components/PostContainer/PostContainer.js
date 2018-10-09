import React from 'react'
import Post from './Post'
import './PostContainer'

const PostContainer = props => {
    return (
        <div className="post-container">
            {props.postData.map(item => {
                return (
                    <div>
                        <Post 
                            post={item}
                        />
                        {/* <CommentSection /> */}
                    </div>
                )
            })}
            {/* <CommentSection postData={props.postData}/> */}
        </div>


            
    )
}

export default PostContainer