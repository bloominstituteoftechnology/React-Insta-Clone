import React from 'react';
import './PostContainer.css';

const PostContainer = (props) => {
return ( 
    <div> 
    {props.postData.map((post) => {
        return (
            <div key={post.id}>
            <p className="Title"> <img src = {post.thumbnailUrl} alt={post.imageUrl} className="Container2"/> {post.username} </p>
                <img src={post.imageUrl} alt={post.thumbnailUrl} className="Container"/>
                <p> {post.comments.username} {post.comments.text} </p>
            </div>
        )
    })}

    </div>
)
}



export default PostContainer;