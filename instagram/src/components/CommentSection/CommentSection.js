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
       if(myNewComment.text !== '') commentsArray.push(myNewComment);
        this.setState({comments: commentsArray, newComment: ''})
    }

    render() {
        return (
            <div>
                <div>
                <i class="far fa-heart margin-left-right icon"></i>
                <i class="far fa-comment margin-left-right icon"></i> 
                </div>      
               <p class='margin-left-right'>{this.state.likes} likes</p>

                {this.state.comments.map(comment => {
                    return (    
                        <div class='margin-left-right'> 
                            <b>{`${comment.username}:`}</b> {`${comment.text}`}
                        </div>
                    );
                })}

                <form class='form' onSubmit={this.addComment}>
                    <input
                        class='comment-input'
                        name='newComment'
                        placeholder='Add a comment as erinc_emer...'
                        value={this.state.newComment}
                        onChange={this.commentInput}
                    />
                    <button class='btn btn-primary comment-button' type="submit">Add Comment</button>
                </form>
            </div>
        );
    }
}

export default CommentSection;