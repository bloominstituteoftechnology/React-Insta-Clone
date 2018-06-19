import React from 'react' ;
import './comment-section.css' ;

const CommentInput = (props) => {
    // console.log(props);
    
    return(
        <form action="">
            <input type="text" placeholder="Add a comment..."/>
        </form>

        // <form className="comment-input" onSubmit={(event => {
        //     alert('greetings from CommentInput') ;
        //     alert(event) ;
        // })}
        // >
        //     <input type="text" placeholder="Add a comment..."/>
        // </form>

    )
    // {alert('greetings from CommentInput')}

}
export default CommentInput ;