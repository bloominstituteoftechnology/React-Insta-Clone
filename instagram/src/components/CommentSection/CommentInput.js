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

// for parent function
//  this.state ={
//     count:0
// }

// incementCount = () => {
//     this.setState(prevState => {
//         return {
//             count: prevState.count + 1
//         };
//     });
// };

// pass down state

// <Button count = {this.state.count} incrementCount={this.incrementCount}>

// <button onClick = {props.incrementCount}> {props.count}</button>

export default CommentInput;