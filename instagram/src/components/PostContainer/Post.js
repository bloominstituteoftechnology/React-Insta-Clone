import React from 'react';
import Comment from './CommentSection/Comment';

const Post= props => { 
    console.log(props.dummyData);
    return (
        <div>
            {props.dummyData.map(info => {
                return (
                <div>
                    <div>
                        <img src = {info.thumbnailUrl}/>
                        <p>{info.username}</p>
                    </div>
                    <div>
                        <Comment comments={info.comments}/>
                    </div> 
                </div>
                );
            })}
        </div>
    );
}

export default Post;