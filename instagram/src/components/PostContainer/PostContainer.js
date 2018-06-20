import React from 'react' ;
import './post-container.css' ;
import PostCard from './PostCard' ;

const PostContainer = (props) => {
    return(
        <div className="post-container">
            {props.propUserData.map((obj, index) => {
                return(
                    <PostCard key={index} post={obj} />
                )
            })}
        
        </div>
    )
}
export default PostContainer ;
