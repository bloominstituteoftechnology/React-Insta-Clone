import React from 'react';

const AddComment = props => {
    console.log(props)
    return (
        <div>
            <form onSubmit={props.comment}>
                <input
                    type='text'
                    placeholder='Add Comment'
                    name='text'
                    onChange={props.change}
                />
            </form>
        </div>
    );
}

export default AddComment;
