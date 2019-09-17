import React from 'react';
import './CommentSection.css';
import AddComment from '../AddComment/AddComment';
import Comment from './Comment';
import styled from 'styled-components';

const CommentsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-content: center;
    flex-wrap: wrap;
    width: 90%;
`;

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            comments: props.comments,
            comment: ''
        }
    }
    componentWillUnmount(){
        this.setComments();
    }

    componentDidMount(){
        const id = this.props.postId;
        if (localStorage.getItem(id)){
            this.setState({
                comments: JSON.parse(localStorage.getItem(this.props.postId))
            })
        }else{
            this.setComments();
        }
    }

    commentHandler = e =>{
        this.setState({comment: e.target.value})
    }

    handleCommentSubmit = e => {
        e.preventDefault();
        const newComment = {text: this.state.comment, username: `@${localStorage.getItem('username')}`};
        const comments = this.state.comments.slice();
        comments.push(newComment);
        this.setState({comments, comment: ''});
        setTimeout(() => {
            this.setComments();
        }, 500)
    };
    setComments = () =>{
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        )
    }
    render(){
        return(
            <CommentsWrapper>
                {this.state.comments.map((c,i) => <div className="comments"> <Comment key={i} comment={c} /> </div> )}
                <div className="timestamp">
                    <span>ago</span>
                </div>
                <div className="hr"></div>
                <AddComment comment={this.state.comment} changeComment={this.commentHandler} submitComment={this.handleCommentSubmit} />
            </CommentsWrapper>
        )
    };
}

export default CommentSection;