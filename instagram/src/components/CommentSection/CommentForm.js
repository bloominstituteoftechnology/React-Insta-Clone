import React from 'react';

import styled from 'styled-components';

const Button = styled.button`
    padding: 10px;
    border: none;
    font-weight: bold;
    font-size: 16px;
`

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: '',
        }
    }

    changeHandler = event => {
        this.setState({inputText: event.target.value});
     }
    submitHandler = event => {
        event.preventDefault();
        this.props.createComment(this.state.inputText);
        console.log(this.state.inputText);
        this.setState({inputText: ''})
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                    type="text"
                    onChange={this.changeHandler}
                    placeholder="Add a comment"
                    value={this.state.inputText}
                />
                <Button>...</Button>
            </form>
        )
    }
}

export default CommentForm;