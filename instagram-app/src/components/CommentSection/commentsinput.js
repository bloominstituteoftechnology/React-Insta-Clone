import React from 'react';




function CommentsInput(props){
    
    return(
        
        <form onSubmit= {props.submitComment}>
            <input className='comment-input'
            type='text'
            
            placeholder='Add comment...'
            value={props.comment}
            onChange={props.changeComment}
            
            
            
            />
        



        </form>

    )
}

export default CommentsInput;

