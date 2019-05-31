import React from 'react'
import { Input, Form } from 'reactstrap'

const CommentInput = props => {
    return (
        <Form onSubmit={props.addComment}>
            <Input
                placeholder='Add a comment...'
                type='text'
                onChange={props.onInputChange}
                value={props.text}
            />
        </Form>
    )
}

export default CommentInput