import React from 'react';
import Proptypes from 'prop-types';
import Comment from './Comment';

class CommentSection extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        comments: props.com.comments,
        input: ""
      }
    }

    saveComment = (event) => {
        this.setState ({input: event.target.value})
    }

    addComment = (event) => {
        if (event.key === 'Enter'){
            const commentscopy = this.state.comments.slice();
            commentscopy.push({
                username: "JoeyJoJoJrShabadoo",
                text: this.state.input,
            });
            this.setState({comments: commentscopy});
            this.setState({input: ""});
        }
    }

    render() {
        return(
        <div className="commentsection">
            {this.state.comments.map(item => <Comment com={item}/>)}
            <input value={this.state.input} onChange={this.saveComment} onKeyPress={this.addComment} className="commentinput" placeholder="  Add Comment"/>
        </div>
    )
    }
}

export default CommentSection;








// keeping this, lest i break something 
//const CommentSection = props => {

//     return(
//         <div className="commentsection">
//             {this.state.comments.map(item => <Comment com={item}/>)}
//         </div>
//     )
// }