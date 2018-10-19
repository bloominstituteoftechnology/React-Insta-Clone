import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: this.props.obj.comments,
            counter: this.props.obj.likes,
            input: '',
            liked: false
        }
    }

    handleInput = (event) => {
        const {value} = event.target;
        this.setState({
            input: value
        });
    }

    addNewComment = (event) => {
        event.preventDefault();
        const newComment = {
            username: "T-rex_Ninja",
            text: this.state.input
        }
        this.setState({
            comments: [...this.state.comments, newComment],
            input: ''
        })
    }

    addNewLike = (event) => {
        event.preventDefault();
        const hearts = this.state.counter;
        const liked = this.state.liked;
        if (liked === false) {
            this.setState({
                counter: hearts+1,
                liked: true
            })
        } else if (liked === true) {
            this.setState({
                counter: hearts-1,
                liked: false
            })
        }
    }

    render() {
        return (
            <div className="commentSection">
                <div className="comment-icons">
                    <a href="#" onClick={this.addNewLike}><i className="far fa-heart"></i></a>
                    <a href="#"><i className="far fa-comment"></i></a>
                </div>

                { this.state.counter === 1 ? 
                    ( <p className="like">1 like</p> ) :
                    ( <p className="likes">{this.state.counter} likes</p> )
                }

                <div className="commentsContainer">
                    {this.state.comments.map(item => {
                        return (
                            <Comment key={item.text} username={item.username} text={item.text} />
                        )
                    })}
                </div>

                <p className="timestamp">{this.props.obj.timestamp}</p>

                <form className="addComment" onSubmit={this.addNewComment}>
                    <input onChange={this.handleInput} placeholder="Add a comment..."></input>
                    <p>...</p>
                </form>

            </div>
        )
    }
}

export default CommentSection;