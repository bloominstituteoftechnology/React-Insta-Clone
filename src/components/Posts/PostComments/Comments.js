import React, { Component } from 'react';
import PostComments from "./PostComments";
import PostTimeStamps from '../PostBody/PostTimeStamps';
import '../post.css'


class Comments extends Component {
  constructor(props){
    super(props);
    this.state = {
    userInput: '',
    comments: this.props.obj.comments,
    timestamps: this.props.obj,
    counter: this.props.obj.likes
    }
}

usersInput = (event) => {
    const {value} = event.target;
    this.setState({
        userInput: value
    });
}

addComment = (event) => {
    event.preventDefault();
    const newComment = {
        username: "basicCoder45",
        text: this.state.userInput
    }
    this.setState({
        comments: [...this.state.comments, newComment],
        userInput: ''
    })
}

addLike = (event) => {
    event.preventDefault();
    const likesCounter = this.state.counter;
    var likeButton = document.getElementById("likeAction");
    var redLikeButton = document.getElementById("redLikeAction");
    likeButton.style.display = "none";
    redLikeButton.style.display = "inline-flex";

    this.setState({
        counter: likesCounter + 1
    })
}

removeLike = (event) =>{
    event.preventDefault();
    const likesCounter = this.state.counter;
    var likeButton = document.getElementById("likeAction");
    var redLikeButton = document.getElementById("redLikeAction");
    likeButton.style.display = "inline-flex";
    redLikeButton.style.display = "none";

    this.setState({
        counter: likesCounter - 1
    })
}

render(){
    return(
        <div className="commentsContainer">
        { this.state.counter === 1 ? ( <p className={"like"}></p> ) : ( <p className={"likes"}>{this.state.counter} likes</p> )}
        <div className={"action"} id={"likeAction"} ref={"likeAction"} onClick={this.addLike}></div>
        <div className={"action"} id={"redLikeAction"} ref={"likeAction"} onClick={this.removeLike}></div>
        <div className={"action"} id={"commentAction"}></div>
        
            {this.state.comments.map(instance => {
                return (
                    <div>
                    <PostComments key={instance.username + instance.timestamps + instance.text}username={instance.username} text={instance.text} />

                    </div>
                        )
            
            })}

            <PostTimeStamps posttime={this.state.timestamps} />

            <div className={"commentInputForm"}>
                <form onSubmit={this.addComment}>
                    <input 
                    onChange={this.usersInput}
                    value={this.state.userInput}
                    className={"addACommentInput"} 
                    type="text" placeholder="Add a comment..."
                    >
                    
                    </input>
    
                    <div className={"addCommentActionMenu"}>
                        &bull;&bull;&bull; 
                    </div>
                </form>
            </div>
        </div>
    )
}
}

export default Comments