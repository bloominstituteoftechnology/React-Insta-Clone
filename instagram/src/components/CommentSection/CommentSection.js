import React from 'react';
import Comments from './Comments';



class CommentSection extends React.Component {
    constructor(props) { //recieves props from state on App.js
        super(props);
        this.state = {
            comments: props.comments //gets comments from state as props
        };
    }
    render() {
        return (
            <div>
                {this.state.comments.map((comment, index) => <Comments key = {index} comment ={comment} />)}
            </div>
        )
    }
}

    
export default CommentSection;


//when building out comments, insert <CommentInput /> after <Comments />
// import CommentInput from '.CommentInput';