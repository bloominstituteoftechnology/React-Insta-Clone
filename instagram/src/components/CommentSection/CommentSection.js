import React from "react";

import Comment from "./../Comment/Comment"
import PropTypes  from "prop-types";

const CommentSection = props=>{

    return (

        <div>
            {
                props.comments.map(comment => {
                        return <Comment key={comment.id} comment={comment}/>
                    }
                )
            }
                <form className="form1"><input type="text" placeholder="Add a Comment..."/></form>




        </div>
    );
}

export default CommentSection