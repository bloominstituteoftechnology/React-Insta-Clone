import React from 'react'; 
import PropTypes from 'prop-types'; 
import CommentSection from '../CommentSection/CommentSection'; 
import dummyData from '../../dummy-data'

const PostContainer = props =>{
    return(
    <div className="post-container">
    {props.posts.map((item, data)=>{
        return(
            <div key={data}>
            <div className="username-header">
            <img className = "thumbnail" src={item.thumbnailUrl} alt="user"/>
            <div className="user head">{item.username}</div>
            </div>
            <img className = "post-img" src={item.imageUrl} alt="Post-Image"/>
            <div className="img-icons">
            <div className="img-icon-left">
            <i class="far fa-heart"></i>
            <i class="far fa-comment"></i>
            <i class="fas fa-paper-plane"></i>
            </div>
            <div className="img-icon-right">
            <i class="far fa-bookmark"></i>
            </div>
            </div>
            <div class="comment user likes">{item.likes} likes</div>
            <div><CommentSection comments={item.comments}/></div>
            </div>
        )}
    )}
    </div>
    )
}
PostContainer.propTypes ={
PostContainer: PropTypes.shape,
    thumbnailUrl: PropTypes.object, 
    username: PropTypes.string, 
    imageUrl: PropTypes.object, 
    comments: PropTypes.string, 
    likes: PropTypes.string, 
}
export default PostContainer; 