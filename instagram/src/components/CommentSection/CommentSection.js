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
        this.setState({comments: this.props.commentData, likes: this.props.likesData});
    }

    commentInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    };

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
                <div>
                <i class="far fa-heart icon"></i>
                <i class="far fa-comment icon"></i> 
                </div>      
               <p>{this.state.likes} likes</p>

                {this.state.comments.map(comment => {
                    return (    
                        <div class='container'> 
                            {`${comment.username}: ${comment.text}`} 
                        </div>
                    );
                })}

                <form onSubmit={this.addComment}>
                    <input
                        name='newComment'
                        placeholder='add comment'
                        value={this.state.newComment}
                        onChange={this.commentInput}
                    />
                    <button type="submit">Add Comment</button>
                </form>
            </div>
        );
    }
}

export default CommentSection;