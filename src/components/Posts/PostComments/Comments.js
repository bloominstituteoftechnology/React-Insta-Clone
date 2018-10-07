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
    timestamps: this.props.obj
    }
}

// changeUserInput(input){
//     this.setState({
//         userInput: input
//     })

    
// }

usersInput = (event) => {
    const {value} = event.target;
    this.setState({
        userInput: value
    });
}

addComment = (event) => {
    event.preventDefault();
    const newComment = {
        username: "basicCoderHal9000",
        text: this.state.userInput
    }
    this.setState({
        comments: [...this.state.comments, newComment],
        userInput: ''
    })
}

render(){
    return(
        <div className="commentsContainer">
        
            {this.state.comments.map(instance => {
                return (
                    <PostComments key={instance.username + instance.timestamps + instance.text}username={instance.username} text={instance.text} />
                        )
            
            })}

            <PostTimeStamps posttime={this.state.timestamps} />

            <div className={"commentInputForm"}>
                <form onSubmit={this.addComment}>
                    <input 
                    onChange={this.usersInput}
                    // onChange={(el)=>this.changeUserInput(el.target.value)}
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