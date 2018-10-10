import React from 'react';

class CommentInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: '',
        }
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addNewComment(this.state.input);
        this.setState({
            input: ''
        })
    }

    render(){

    return (
        <form onSubmit={this.handleSubmit}>
            <input value = {this.state.input} onChange = {this.handleChange} type='text' className='comment-input' placeholder='Add a comment...' />
        </form>
    )
}
}

export default CommentInput;