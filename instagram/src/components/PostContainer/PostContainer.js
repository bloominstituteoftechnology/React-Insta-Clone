import React from 'react';
import './PostContainer.css'
import { Image }  from 'react-bootstrap'

const PostContainer = (props) => {
    return (
        <div className="posts-all">
        {props.data.map((post, index) => {
            return <div key={index} className="posts-individual">
                <div>
                <img src={post.thumbnailUrl} alt="user's profile"/>
                {post.username}
                </div>
                <div>
                <Image src={post.imageUrl} alt="post" className="post-image" responsive/>
                </div>
                <div>
                    {post.likes}
                </div>
            </div>
        })}
        </div>
    );
}

export default PostContainer;