import React from 'react';
import './PostContainer.css';
import Header from './Header';
import Body from './Body';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = (props) =>{
    return(
        <div>
            <Header thumbnail={props.obj.thumbnailUrl} username={props.obj.username}/>
            <Body postPic={props.obj.imageUrl} />
            <CommentSection comArray={props.obj.comments} likes={props.obj.likes}/>
        </div>
    );
};

export default PostContainer;