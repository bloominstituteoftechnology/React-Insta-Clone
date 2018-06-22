import React from 'react' ;
import './post-container.css' ;
import PostCard from './PostCard' ;

const PostContainer = (props) => {
    return(
        <div className="post-container">
            {props.defaultData.map(obj => <PostCard key={obj.imageUrl} post={obj} />)}
        </div>
    )
}
export default PostContainer ;
