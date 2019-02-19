import React from 'react';

const PostContainer = props => {
    return <div> {props.dataProps.forEach(point =>{ <CommentSection comment={point.comment} key={point.username}/>})} </div>
}

export default PostContainer;