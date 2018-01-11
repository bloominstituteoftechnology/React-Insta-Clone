import React from 'react';
import './PostContainer.css'
import { Image }  from 'react-bootstrap'
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
    return (
        <div className="posts-all">
            <div className="posts-individual">
                <div>
                    <img src={props.data.thumbnailUrl} alt="user's profile"/>
                    {props.data.username}
                </div>  
                <div>
                    <Image src={props.data.imageUrl} alt="post" className="post-image" responsive/>
                </div>
                <div>
                    {props.data.likes}
                </div>
                <div>
                    <CommentSection comments={props.data.comments} />
                </div>
            </div>
        </div>
    );
}

export default PostContainer;