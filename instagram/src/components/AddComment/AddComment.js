import React from 'react';
import styled from 'styled-components';

class AddComments extends React.Component {
   
    render() {

        return (
            <div>
                <form onSubmit={this.props.submitHandler} id={this.props.id}>
                <CommentInput 
                    type="input" 
                    placeholder="Add a comment..." 
                    onChange={this.props.inputHandler}
                    value={this.props.commentInputValue}
                >
                    </CommentInput>
                    </form>
            </div>
        )
    }
}

const CommentInput = styled.input`
    width: 100%;
    height: 40px;
    padding-left: 20px;
    font-size: 20px;
    border: none;
`

export default AddComments;