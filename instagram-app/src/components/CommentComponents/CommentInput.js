import React from 'react'
import { Input, Form } from 'reactstrap'

const CommentInput = props => {
    return (
        <Form onSubmit={props.submitComment}>
            <Input
                placeholder='Add a comment...'
                type='text'
                onChange={props.changeComment}
                value={props.comment}
            />
        </Form>
    )
}

export default CommentInput