import React from 'react';
import './PostContainer.css';

const PostContainer = (props) => {
    return (
        <div className="PostData" >
            {props.postData.map((postData) =>{
                return(
                    <div className="Data" key={postData.id}>
                    <p className="text"><img src = {postData.thumbnailUrl} alt="boohoo" className="thumb-reponsive"/>{postData.username}</p>
                    <img src = {postData.imageUrl} alt="boohoo" className="img-responsive" />
                    </div>
                );
            })}
            </div>
    );
}

export default PostContainer