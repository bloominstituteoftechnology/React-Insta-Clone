import React from 'react';
import './CommentSection.css';
import AddComment from '../CommentSection/AddComment'

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            comments: [],
            likes: 0,
            newComment: '',
        }
    }

    componentDidMount() {
        this.setState({ comments: this.props.comments, likes: this.props.likes });
    }

    onChange = e => {
        this.setState({ newComment: e.target.value });
    }

    addComment = () => {
        const username = "corey_with_an_e";
        const text = this.state.newComment;
        
        this.setState({
            comments:[...this.state.comments, {username, text}],
            newComment: '',
        })
        console.log(text);
    }

    likePost = () => {
        this.setState({ likes: this.state.likes + 1 });
    }
    

    render() {
        return (
            <div className='comment-section'>
                <button onClick={this.likePost}>Like</button>
                <div>{this.state.likes} likes</div>
                {this.state.comments.map((comment) => {
                    return (
                        <>
                            <AddComment comment={comment} key={Date.now()} />
                        </>
                    );
                })}
                <input 
                    placeholder="Add a Comment"
                    value={this.state.newComment}
                    onChange={this.onChange}>
               </input>     
               <div className="button" onClick={this.addComment}>
                    Add Comment
                </div>
            </div>
        )
    }
}

export default CommentSection;