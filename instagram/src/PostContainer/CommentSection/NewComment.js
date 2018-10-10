import React, {Component} from 'react';
const NewComment= prop =>{
    return (
        <div className='new-comment'>
            <form type= 'submit' onSubmit={prop.addComment}>
                <input onChange ={prop.changeComment}type='text' placeholder='add a comment'></input>
            </form>
        </div>
    )
}
export default NewComment;