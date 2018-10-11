import React from 'react';
import Comments from './Comments';



class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        };
    }
    render() {
        return (
            <div>
                {this.state.comments.map((c, i) => <Comments key = {i} comment ={c} />)}
            </div>
        )
    }
}

    
export default CommentSection;


//when building out comments, insert <CommentInput /> after <Comments />
// import CommentInput from '.CommentInput';