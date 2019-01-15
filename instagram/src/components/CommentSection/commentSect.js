import React, { Component } from 'react';
import './comments.css';
import Comments from './comments';

/*
Passed from post.js

        time={props.timestamp}
        comments={props.comments}
        likes={props.likes}
*/

class CommentSect extends Component {
    constructor() {
        super();
        this.state = {}
    }

componentDidMount() { 
    this.setState({
        comments: this.props.comments,
        comment: ''
    })
}

handleAddComment  = (event) => {
    event.preventDefault();
    const comments = this.state.comments.slice();
    comments.push({
        username: "dumDum12",
        text: this.state.comment
    })

    this.setState( {comments, comment: ""} )
}

handleChange = (event) => {
    this.setState( {
        comment: event.target.value
    })
}


    render() {
        console.log(this.state.comments)
        return(
            <div>
                <div>
                    {this.props.comments.map( (data, i) => <Comments key = {i} user={data.username} text={data.text}/>)}
                </div>
                    
                <div className="time-stamp">
                    {this.props.time}
                </div> 

                <div className="comment-input">

                <form onSubmit={this.handleAddComment}>
                    <input onChange={this.handleChange} className="input-comment" type="text" placeholder="Add a comment..."/>
                </form>
                    <img className="comment-dots" src="https://img.icons8.com/ios-glyphs/30/000000/more.png" alt="more options"></img>
            </div>  
        </div>
        )
    }
}

export default CommentSect;