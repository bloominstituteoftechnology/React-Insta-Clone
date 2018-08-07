import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';


class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: props.comments,
            comment: ""
        };
    }

    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }    
    
    handleSubmit = event => {
        event.preventDefault();
        const stateCopy = this.state.comments.slice()
        stateCopy.push({username: 'dave', text: this.state.comment })
        this.setState({comments: stateCopy, comment: ""})
        console.log(stateCopy)
    }
    
    render () {
        return (
            <div>
                {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
                <CommentInput 
                handleInput={this.handleInput} 
                value={this.state.comment}
                handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default CommentSection;