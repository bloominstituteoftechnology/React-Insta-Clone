import React, { Component } from 'react';
import styled from 'styled-components';

const CommentAdd = styled.div`

    margin-top: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    > input {
        max-width: 300px;
        width: 100%;
        height: 30px;
        margin: 5px 10px 0 0;
        border: 1px solid lightgray;
        border-radius: 5px;
        padding: 5px;
        font-size: 1.2rem;

    }

    > button {
        margin-top: 5px;
        background: white;
        width: 100px;
        height: 30px;
        border: 1px solid gray;
        border-radius: 5px;
    }


`

class AddComment extends Component {
    
    render() { 
        return ( 
            <CommentAdd onSubmit={this.props.addNewComment}>
                <input 
                    type="text"
                    placeholder="Add new comment"
                    onChange={this.props.handleCommentUpdate}
                    value={this.props.value}
                />
                <button onClick={this.props.addNewComment}>Add comment</button>
            </CommentAdd>
         );
    }
}
 
export default AddComment;