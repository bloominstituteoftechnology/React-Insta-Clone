import React from 'react';
import {Form, Inputs} from '../../Styles';

const CommentInput = props =>{
    return(
        <Form>
        <form onSubmit={props.submitComment}>
            <Inputs commentInput
                type="text"
                placeholder="Add Comment..."
                value={props.comment}
                onChange={props.changeComment}
            />
            <i class="fas fa-ellipsis-h fa-2x"></i>
        </form>
        </Form>
    );
}

export default CommentInput;