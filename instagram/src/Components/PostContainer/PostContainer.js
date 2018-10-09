import React from 'react'
import Post from './Post'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
    return (
        <div>
            {props.postData.map(item => {
                return (
                    <div>
                        <Post 
                            post={item}
                        />
                        <CommentSection 
                            comments={item.comments}
                        />
                    </div>
                )
            })}
            {/* <CommentSection postData={props.postData}/> */}
        </div>


            
    )
}

export default PostContainer