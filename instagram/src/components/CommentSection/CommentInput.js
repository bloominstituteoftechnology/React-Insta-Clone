import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';


const CommentInput = props => {
    return (
        <Form>
            <FormGroup >
                <Input type="text" name="search" id="exampleSearch" placeholder="Add comment..." />
            </FormGroup>
        </Form>
    )
}



export default CommentInput;