import React from 'react';
import Comment from './Comment';
import Timestamp from './Timestamp';
import CommentInput from './CommentInput';

class CommentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            newComment: "",
            likes: 0
        };
    }

    addNewComment = event => {
        event.preventDefault();
            
        this.setState({
            comments: [
                ...this.state.comments,
                {userName: "User", text: this.state.newComment}
            ]
        });
    }

    handleChanges = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    addLikes = event => {
        event.preventDefault();
        this.setState({likes: this.state.likes + 1})
    }

    render() {
        return(
            <div>
                {this.state.likes}
                <button>
                    <img onClick={this.addLikes}
                        className="icon"
                        src="instagram-new.png" 
                        alt="comment heart icon">
                    </img>
                </button>

                <button>
                    <img 
                        className="icon"
                        src="instagram-new.png" 
                        alt="comment post icon">
                    </img>
                </button>
                <Timestamp />
                <CommentInput 
                    addNewComment = {this.addNewComment}
                    handleChanges = {this.handleChanges}
                />
            </div>
        )
    }
}

export default CommentContainer;