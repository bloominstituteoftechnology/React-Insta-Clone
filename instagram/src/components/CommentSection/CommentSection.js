import React from 'react';
import Comment from './Comment'
import SubmitComment from './SubmitComment'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
    }
    
    render() {
        return (
            <div>
                {this.state.comments.map((comment,index) => (
                    <Comment 
                        commentUsername = {comment.username}
                        commentText = {comment.text}
                        key = {index}
                    />
                ))}
                <SubmitComment />
            </div>
        );
    }
}

// const CommentSection = props => {
//     return (
//         <div>
//             {props.comments.map(comment => (
//                 <Comment 
//                     commentUsername = {comment.username}
//                     commentText = {comment.text}
//                 />
//             ))}
//             <SubmitComment />
//         </div>
//     );
// }

export default CommentSection;


// Lets divide up the data that we've been working with this far by separating the 
// comments array onto a new component's state. Pass down the comments through each 
// post to the CommentSection component. Be sure that you set the incoming comments
// props data on the state of the CommentSection component.