import React from 'react';


const Comment = props => {
    return (
        <div>
            {/* <div>
                {props.post.comments.map(comment => (
                    comment.username + comment.text
                ))}
                ENTER COMMENT
            </div> */}
            
            <div>
                {/* {props.commentUsername} */}
                {/* {props.comments[0].text} */}
                {props.comments.map(comment => (
                    comment.username + comment.text
                ))}
             </div>     
        </div>        

    );
}
export default Comment;