import React, {Component} from 'react';
import './CommentSection.css';

class CommentSection extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0,
            newComment: '',
            comments: []
        }
    }


    componentDidMount() {
        this.setState({comments: this.props.commentData});
    }

    addComment = event => {
        event.preventDefault();
        const commentsArray = this.state.comments;
        const myNewComment = {
            username: 'erinc_emer',
            text: this.state.newComment
        }
        commentsArray.push(myNewComment);
        this.setState({comments: commentsArray})
    }

    render() {
        return (
            <div>
                <i class="far fa-heart"></i>
                <i class="far fa-comment"></i>                
                {this.state.comments.map(comment => {
                    return (
                        <div class='container'>
                            {`${comment.username} : ${comment.text}`} 
                        
                        </div>
                    );
                })}
                <button onClick={this.addComment}>Add comment</button>
            </div>
        );
    }
}

export default CommentSection;