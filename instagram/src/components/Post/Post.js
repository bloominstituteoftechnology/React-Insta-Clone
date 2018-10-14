import React from 'react';
import PropTypes from 'prop-types';



const Post=(props)=>{
const post=props.post;
    return(
        <div>
    <div class="topofpic">
                    <img src={post.thumbnailUrl} class="circle"/>
                    <div class="username"> {post.username}</div>
                    
                    </div>
                        <div class="main-image">
                            <img src={post.imageUrl}/>

                        </div>
                        </div>
    )
}

Post.propTypes={
    post: PropTypes.shape({
        username: PropTypes.string,
        imageUrl: PropTypes.string
    })
}


export default Post;