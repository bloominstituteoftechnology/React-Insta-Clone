import React from 'react';




function CommentsInput(props){
    console.log(props);
    return(
        <form>
            <input className='comment-input'
            type='text'
            
            placeholder='Add comment...'/>



        </form>

    )
}

export default CommentsInput;

