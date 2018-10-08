import React from 'react';
import dummyData from '../../dummyData.js';
import heart from '../../images/Instagram-Heart.png';
import comment from'../../images/comment.png';
import Moment from 'react-moment';



const PostContainer = (props) => {
    return (
        <React.Fragment>
            {dummyData.map ((item) => {
                return (
                    <div className = 'postContainer'  key ={item.timestamp}>
                        <div className = 'userName'>
                            <img src = {item.thumbnailURL}  alt ='user-thumbnail' />
                            <h4> {item.username} </h4>

                        </div>

                        <div className ='imageContainer'>
                            <img src ={item.imageURL} alt ='user post image' />
                        </div>

                        <div className ='userInteraction'>
                            <img src ={heart} alt ='heart' />
                            <img src={comment} alt ='comment' />
                        </div>

                        <div className ='likes-comments'>
                            <h4> {item.likes} Likes</h4>
                            {item.comments.map ((index) => {
                                return (
                                    <div className = 'commentContainer'>
                                        <h4 key = {item.timestamp}>
                                        {index.username}</h4>
                                        <p className ='comment'> {index.text}</p>
                                    </div>
                                )
                            })}

                            <div className ='timeSincePost'>
                                <p> {Moment().startOf('day').fromNow()}</p>
                            </div>
                        </div>
                    
                    </div>
                )
            })
            }
        </React.Fragment>
    )
}

export default PostContainer;
