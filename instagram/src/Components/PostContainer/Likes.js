import React from 'react'

const Likes = props => {
    return (
        <div className="post-actions">
            <div className="top">
                <div className="left-actions">
                    <i 
                        className="far fa-heart"
                        onClick={props.addLike}
                    ></i>
                    <i className="far fa-comment"></i>
                    {/* <i class="far fa-share-square"></i> */}
                </div>
                <div className="right-actions">
                    <i className="far fa-bookmark"></i>
                </div>
            </div>
            <div className="bottom">
                <div className="likes">
                    {props.likes} likes
                </div>
            </div>
        </div>
    )
}

export default Likes