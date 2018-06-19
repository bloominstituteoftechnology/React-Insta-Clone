import React from 'react' ;
import './comment-section.css' ;


const CommentSection = (props) => {
    return(
        <div className="comment-section">
            Placeholder: "CommentSection"
            
            {props.propComments.map((comment, index) => {
                return(
                    <div className="comment" key={index}>
                    
                        <p>{comment.text}</p>

                    </div>
                )
            })}
            <div className="comment">

            </div>
        </div>

    )
}
export default CommentSection ;