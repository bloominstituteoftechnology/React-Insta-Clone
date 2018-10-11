import React, { Component } from 'react';
import './CommentSection.css';
import Comment from './Comment.js'
import Buttons from './Buttons'
class CommentSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likes: '',
            comments: [],
            holder: ''
        }
    }
    componentDidMount() {
        this.setState({
            comments: this.props.comments,
            holder:''
        })
        
    }
    inputHandler = (event) => {
        const value = event.target.value;
        this.setState({
            holder: value,
        })
    }
    addNewComment = (event) => {
        event.preventDefault()
        const newComment = {
            username: 'Griffin',
            text: this.state.holder
        }
        this.setState({
            comments: [...this.props.comments, newComment],
            holder:''
        })
    }
    addLike = (event) => {
        event.preventDefault();
        console.log(this.state.likes)
        this.setState(prevState => ({ likes: prevState.likes + 1 }));
    }

   


    render() {
        return (
            <div>
                <Buttons
                    likes={this.state.likes}
                    addLike={this.addLike}
                />
                <div>
                    {this.state.comments.map((comment) => {
                        return (

                            <Comment comment={comment} key={Math.random()} />

                        )
                    })}
                </div>
                
                <div className='timestamp'>{this.props.timestamp}</div>
                <form className='add-comment' onSubmit={this.addNewComment}>

                    <input className='comment-input' placeholder='Add a comment...' onChange={this.inputHandler} value={this.state.holder}/>
                  
                </form>
                
            </div>

        )
    }
}

export default CommentSection;