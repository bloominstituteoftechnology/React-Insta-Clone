import React from 'react';

// class CommentSection extends React.Component {
//     constructor(props){
//         super(props);
//         this.state={
//             username:'',
//             commentText: ''
//         };
//     }
//     render(){
//         return null;
//     }
// }

// comments = dummy data

const CommentSection = props => {
    return(
        <div key={props.comments.likes}></div>
    )
}

export default CommentSection;