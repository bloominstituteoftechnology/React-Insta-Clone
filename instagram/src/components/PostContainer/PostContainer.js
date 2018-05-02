import React from 'react';


const Post = props => {
    return(
        <CommentSection comments={props.postData.comments} />
    )
}


const PostContainer = props => {
    return(
        <div>
            {props.postList.map((postData, index) => {
                return (
                    <Post key={index} postData={postData}/>
                )
            })}
        </div>
    );
};

export default PostContainer;