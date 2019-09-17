import React from 'react';
import PropTypes from 'prop-types';
import dummyData from "../../dummy-data";

let nextId = 0;

const getNewId = () => {
    nextId += 1;
    return nextId;
}


class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            text: this.text,
            id: 0,  
        }
    }

    componentDidMount() {
        this.setState({ comments: dummyData.comments });
    }

    addComment = (event, id) => {
        
        console.log('addComment', this.state.text);
        event.preventDefault();
        // if (this.state.inputText === '') {
        // () => this.state.inputText = '';
        // } else {
        this.setState({
            comments: [
            ...this.state.comments,
            {text: 
                this.state.text,
                // timeStamp: taskTimeStamp, 
                // completed: false,
                // color: 'white',
                id: getNewId()}
            ],
            text: ''
        })
        // }
    }
    
    handleChange = event => {
        this.setState({
        text: event.target.value
        })
    }


    render() {
        return (
            <form onSubmit={this.addComment}>
            <input 
                type="text"
                name={this.state.text} 
                placeholder="Add a comment..." 
                value={this.name}
                onChange={this.handleChange}
            />
        </form> 
        )
    }
}



// CommentInput.PropTypes = {
// }

export default CommentInput;