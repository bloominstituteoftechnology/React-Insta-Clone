import React, { Component}  from 'react';

class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
}

handleChanges = e => {
    this.setState ({ comment: e.target.value});

}

newComment = e => {



    console.log(e)
    e.preventDefault();
    const newCommentAdded = {username: 'Fake', text:this.state.comment}
    const selectComment = this.state.comments.slice();
    selectComment.push(newCommentAdded)
    this.setState({comments:selectComment, comment: ''})
};








render() {
    return (
    <div>

    <form onSubmit= {this.newComment}>
        <input
            value={this.state.comment}
            onChange={this.handleChanges}
            name='text'
            type='text'
            placeholder='Leave a comment...' />
    
    
    </form>

    </div>

    )
}
}

// function Comments(props) {
//     return (
//         <div>
//             {props.comment.username}
//             <p>{props.comment.text}</p>
//         </div> //end div

//     )}

    export default Comments;