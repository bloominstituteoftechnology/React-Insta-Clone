import React from 'react'
import CommentSection from './CommentSection'

const PostContainer = props => {
    return (
        <div className="post-container">
            {props.postData.map(item => {
                return (
                    <div>
                        <div className="user">
                            <div className="user-photo">
                                <img src={item.thumbnailUrl} alt=""/>
                            </div>
                            <div className="user-name">
                                {item.username}
                            </div>
                        </div>
                        <div className="image">
                            <img src={item.imageUrl} alt=""/>
                        </div>
                        <div className="post-actions">
                            <div className="left-actions">
                                <i class="far fa-heart"></i>
                                <i class="far fa-comment"></i>
                                {/* <i class="far fa-share-square"></i> */}
                            </div>
                            <div className="right-actions">
                                <i class="far fa-bookmark"></i>
                            </div>
                        </div>
                        <div className="likes">
                            {item.likes} likes
                        </div>
                    </div>
                )
            })}
            <CommentSection postData={props.postData}/>
        </div>


            
    )
}

export default PostContainer