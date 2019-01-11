import React from 'react';
import AddComment from './AddComment';
import Input from '../Login/InputStyles';
import CommentStyles from './CommentStyles'

class CommentSection extends React.Component {
    constructor(props){
        super(props)
        this.state={
            comments: this.props.comments,
            comment: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.addNewComment = this.addNewComment.bind(this)
    }

    addNewComment = event => {
        event.preventDefault()
        const newComment = {username: "leeroy", text: this.state.comment}
        const comments = this.state.comments.slice()
        comments.push(newComment)
        this.setState({ comments, comment: ""})
        console.log("working?")
    }

    handleChange = event => {
        this.setState({comment: event.target.value})
        console.log("testing handle")
    }

    render() {
        return (
            <CommentStyles>
                 {this.state.comments.map((comment, index) => (
                    <AddComment 
                        key={index} 
                        comment={comment}  
                    />
                 ))}
                 <form onSubmit={this.addNewComment}>
                     <Input
                        type="text" 
                        placeholder="Add a comment..."
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                 </form>
            </CommentStyles>
        )
    }

}

export default CommentSection;
