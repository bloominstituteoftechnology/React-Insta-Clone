import React from 'react';
import './post-container.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {

  
 

    return(
        <div className="body-container">
                {props.postsData.map( post => (
                  <div className="post">
                    <div className="post-header">
                        <img className="profile-pic" src={post.thumbnailUrl} />
                        <h1 className="username">{post.username}</h1>
                    </div>
                    <div className="post-pic">
                        <img src={post.imageUrl}/>
                    </div>
                     <CommentSection  comments={post.comments}/> 
                     <section className="postForm">
                         <form>
                             <textarea placeholder="Add a comment..." autocomplete="off">
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








export default PostContainer;