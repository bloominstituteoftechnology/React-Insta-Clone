import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';


const CommentInput = props => {
    return (
        <Form onSubmit={props.submitComment}>
            <FormGroup >
                <Input value={props.comment} onChange={props.changeComment} type="text" name="search" id="exampleSearch" placeholder="Add comment..." />
            </FormGroup>
        </Form>
    )
}



export default CommentInput;