import React from 'react';
import Proptypes from 'prop-types';
import Comment from './Comment';

class CommentSection extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        comments: props.com.comments,
        likes: [props.com.likes],
        timestamp: props.com.timestamp,
        liked: false,
        input: ""
      }
    }

    saveComment = (event) => {
        this.setState ({input: event.target.value})
    }
  
    addLike = () => {
        let likescopy = this.state.likes.slice();
        if (this.state.liked === false) {
            likescopy++;
            this.setState({likes: likescopy});
            this.setState({liked: true})
        } else {
             likescopy--;
            this.setState({likes: likescopy});
            this.setState({liked: false})
        }
     
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
            <div className="likeCommentIcons">
                <i onClick={this.addLike} className={this.state.liked ? "fas fa-heart":"far fa-heart"}></i>
                <i className="far fa-comment"></i>
            </div>
            <div className="likes">{this.state.likes} <span>likes</span></div>
            <div className="timestamp">{this.state.timestamp}</div>
            {this.state.comments.map(item => <Comment addLike={this.addLike} com={item}/>)}
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