import React from 'react';
import './PostContainer.css';

const PostContainer = (props) => {
    return (
        <div className="postContainer">
            {
                props.instaFeed.map((post, index)=> {
                    return (
                        <div key={index}>
                        <section className="logoSection">
                            <img src={post.thumbnailUrl} className="thumbnail"/>
                            <p className="user"> {post.username}</p>
                        </section>
                        <section className="imageSection">
                            <img src={post.imageUrl} className="image"/>
                        </section>
                    
                        </div>
                        
                    )
                })
            }
        </div>
    )
}

export default PostContainer;