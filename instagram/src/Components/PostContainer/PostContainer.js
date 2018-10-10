import React from 'react'
import Post from './Post'
import '../PostContainer/PostContainer.css'

const PostContainer = props => {
    console.log("post container props", props)
    return (
        <div>
            {props.dummyData.map(item => {
                return (
                    <Post 
                        key={item.imageUrl}
                        post={item}
                    />
                )
            })}
        </div>
    )
}

export default PostContainer
        {/* <div>
            {props.postData.map((item, index) => {
                return (
                    <div 
                        key={index}
                        className="post-container"
                    >
                        <Post 
                            post={item}
                        />
                        <CommentSection 
                            comments={item.comments}
                            index={index}
                            commentsSubmit={props.commentSubmit}
                        />
                    </div>
                )
            })}
        </div> */}