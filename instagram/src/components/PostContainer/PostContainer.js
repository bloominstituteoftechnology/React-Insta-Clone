import React from 'react'
import PropTypes from 'prop-types'
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
     
    return (
     <div>
        {props.postItems.map(post => {
          return (  
        <div>   
            <div className="postContainerDiv">
                <div className="userHeading">
                    <img className="userImage" src={post.thumbnailUrl} alt="userlogo"/> 
                    <p>{post.username}</p>
                </div>
            
                <img src={post.imageUrl} alt="usersPostedImage"/>

                <div className="iconContainer">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                </div>
            <p className="likes">{post.likes} likes</p>
            
            <CommentSection commentInfo={post.comments} key={Math.random()}/>
                
            <div className="timeStamp">{post.timestamp}</div>
 
            </div>
        </div>
        ) 
    })}
       


    </div>
    )
}



PostContainer.propTypes = {
    comments: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }),
    timestamp: PropTypes.string,
    likes: PropTypes.number,
    imageUrl: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    username: PropTypes.string
}

export default PostContainer;