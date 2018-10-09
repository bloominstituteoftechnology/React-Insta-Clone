import React from 'react';
import dummyData from '../../dummyData.js';
import heart from '../../images/Instagram-Heart.png';
import comment from'../../images/comment.png';
import CommentSection from '../../components/CommentSection/comment-section';
// import moment from 'moment';
import '../PostContainer/PostContainer.css'
import PropTypes from 'prop-types';


 const PostContainer = (props) => {
    return (
        <React.Fragment>
            {dummyData.map ((item) => {
                return (
                    <div className = 'postContainer'  key ={item.timestamp}>
                        <div className = 'userName'>
                            <img src = {item.thumbnailUrl}  alt ='user-thumbnail' />
                            <h4> {item.username} </h4>
                         </div>
                         <div className ='imageContainer'>
                            <img src ={item.imageUrl} alt ='user post image' />
                        </div>
                         <div className ='userInteraction'>
                            <img src ={heart} alt ='heart' />
                            <img src={comment} alt ='comment' />
                        </div>
                         <div className ='likes-comments'>
                            <h4 className = 'likes'> {item.likes} Likes</h4>
                            {item.comments.map ((index) => {
                                return (
                                    <div >
                                        <h4 className = 'commentContainer' key = {item.timestamp}>
                                        {index.username}
                                        <span className = 'comment'>{index.text}</span></h4>         
                                    </div>
                                )
                            })}
                             <div className ='timeSincePost'>
                               <p> Posted on {item.timestamp} </p> 
                                {/* {moment().fromNow()} */}
                            </div>
                             <div className = 'inputComment'>
                                <CommentSection />
                            </div>
                         </div>
                    
                    </div>
                )
            })
            }
        </React.Fragment>
    )
}

PostContainer.propTypes = {
	key: PropTypes.oneOfType([
         PropTypes.string, PropTypes.number 
        ]),
	thumbnailUrl: PropTypes.string,
	username: PropTypes.string,
	imageUrl: PropTypes.string,
	likes: PropTypes.number,
	timestamp: PropTypes.string,
	comments: PropTypes.shape({
		username: PropTypes.string,
		text: PropTypes.string
	})
};
 export default PostContainer;