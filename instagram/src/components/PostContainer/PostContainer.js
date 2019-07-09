import React from 'react';
import './post-container.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

const PostContainer = props => {


 

    return(
        <div className="body-container">
                {props.postsData.map( post => (
                  <div className="post" key={post.id}>
                    <div className="post-header">
                        <img className="profile-pic" src={post.thumbnailUrl} alt="profile-pic" />
                        <h1 className="username">{post.username}</h1>
                    </div>
                    <div className="post-pic">
                        <img src={post.imageUrl} alt="post-pic"/>
                    </div>
                     <CommentSection  comments={post.comments}/> 
                     <section className="postForm">
                         <form>
                             <textarea placeholder="Add a comment...">
                             </textarea>
                             <button>
                                 Post
                             </button>
                         </form>
                     </section>
                  </div>
                


                ))}
        </div>

    )
}


//Validate that the data coming down from props is an array of objects
PostContainer.propTypes = {
    postsData: PropTypes.arrayOf(PropTypes.object)
     
   }
   







export default PostContainer;