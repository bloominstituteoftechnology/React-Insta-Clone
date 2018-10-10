import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
// import dummyData from '../../dummy-data';
// import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';


addNewComment = (event, id) => {
    event.preventDefault();
    console.log(id);
    event.target.value = ""
    this.setState({
      comments: [
        // ...this.state.dummyData[id].comments,
        { username: "Troy", text: this.state.newComment},

      ],
      
      newComment: "",
      
    })
    
  }



const PostContainer = props => {
    return (

        <div className = "post-container">
            <div>{props.postInfo.map((post, id) => 
            
            {return <div
                key={id}
                className={post.username}
                
                >
                <div className = "straighten">
                <img className = "profile-img" src = {post.thumbnailUrl} alt = "thumbnail"/>
                <h4 className = "username-comment">{post.username}</h4>                    
                </div>

                <div className = "image-cont">
                <img src = {post.imageUrl} alt = "main img"/>    
                </div>

                <div>
                <img src = "#" alt = "Heart"/>  
                <img src = "#" alt = "Comment"/>  
                </div>

                <div>
                    <h4 className = "likes">{post.likes} likes</h4>
                    <CommentSection
                    commentInfo = {post.comments}
                    addNewComment = {this.addNewComment}

                    />
                </div>

                <div>
                    <p className = "time-stamp">{post.timestamp}</p>
                </div>

                <div className = "input-comment">
                    <form onSubmit={props.addNewComment}>
                        <input 
                        type = "text" 
                        placeholder = "Add a comment..."
                        name = "newComment"
                        onChange={props.changeHandler}
                        
                        value={props.newComment}
                        />

                    </form>
                </div>

                
                </div>
            })}</div>
        </div>
    );
}


PostContainer.propTypes = {
// postInfo: 
username: PropTypes.string,
comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    text: PropTypes.string,
})),
imageUrl: PropTypes.string,
likes: PropTypes.number,
thumbnailUrl: PropTypes.string,
timestamp: PropTypes.string,
}


export default PostContainer