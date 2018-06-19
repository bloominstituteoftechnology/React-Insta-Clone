import React from 'react' ;
import CommentSection from '../CommentSection/CommentSection' ;
import './post-container.css' ;



const PostContainer = (props) => {
    console.log(props.post.username);
    return(
        <div className="post-container">
            <header className="post-header">
                <div className="post-username">

                    {props.post.username}
                
                </div>
                <div className="post-user-thumb">

                    <img 
                    src={props.post.thumbnailUrl} 
                    alt=""
                    />

                </div>
            </header>
            <div className="post-img">

                <img 
                src={props.post.imageUrl} 
                alt=""
                />

            </div>
            <div className="post-bottom">
                <div className="likes">

                    Likes: {props.post.likes}

                </div>


                <CommentSection />


            </div>
        </div>
    )
}
export default PostContainer ;