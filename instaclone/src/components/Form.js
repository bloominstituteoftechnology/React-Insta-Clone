import React from "react"
const  Form  =(props)=>{

    return(
        <div>
                <form onSubmit={props.addCommentHandler}>
                <input className="form-input"
                 type="text" 
                onChange={props.changeHandler} 
                value={props.commentInput}
                name="commentInput" 
                placeholder="Leave a Comment" />
                </form>
        </div>
    )
}

export default Form;