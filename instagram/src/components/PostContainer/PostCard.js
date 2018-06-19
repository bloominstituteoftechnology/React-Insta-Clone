import React from 'react' ;
import './post-container.css' ;
import CommentContainer from '../CommentSection/CommentContainer';



const PostCard = (props) => {
    // console.log(props.post.username);
    return(
        <div className="post-content">
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


                <CommentContainer 
                propComments={props.post.comments}/>
                {/* {console.log(props.post.comments)} */}


            </div>
        </div>
    )
}
export default PostCard ;