import React from 'react';
import CommentSection from './CommentSection';

function PostContainer(props){
    return (
        <div className='post-content-container'>
            <div>
                {props.arg.username}
                <img src={props.arg.imageUrl} alt=""/>
            </div>
            <div>
                {props.arg.comments.map( com => {
                    return <CommentSection com={com}/>
                })}
            </div>
        </div>
        
    );
}

export default PostContainer;