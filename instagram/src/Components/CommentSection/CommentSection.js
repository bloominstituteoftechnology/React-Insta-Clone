import React from 'react'
import Comments from './Comments'
import './CommentSection.css'
import styled from 'styled-components';

const CommentSectionDiv = styled.div`
    margin: 0 10px;
`

const Top = styled.div`
    margin: 5px 0;
`

const Hr = styled.div`
    border: .4px solid rgb(230, 230, 230);
`

const Bottom = styled.form`
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 9px;
`

const Input = styled.input`
    width: 90%;
    font-size: 9px;
    padding: 5px;
    border: none;
`




class CommentSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: props.comments,
            newComments: ''
        }
    }

    componentDidMount() {
        const id = this.props.postId;
        if (localStorage.getItem(id)) {
          this.setState({
            comments: JSON.parse(localStorage.getItem(this.props.postId))
          });
        } else {
          this.setComments();
        }
    }
    
    componenetWillUnmount() {
        this.setComments();
    }

    setComments = () => {
        localStorage.setItem(
            this.props.postId,
            JSON.stringify(this.state.comments)
        )
    }

    commentChangeHandler = event => {
        this.setState({ newComments: event.target.value })
    }

    submitCommentHandler = event => {
        event.preventDefault()
        const newComment = { text: this.state.newComments, username: 'ynafey'}
        const comments = this.state.comments.slice()
        comments.push(newComment)
        this.setState({ comments, newComment: '' })
        setTimeout(() => {
            this.setComments()
        }, 500)
    }

    render () {
        return (
            <CommentSectionDiv>
                <Top>
                    {this.state.comments.map((item, index) => {
                        return (
                            <Comments 
                                key={index}
                                comments={item}
                            />
                        )
                    })}
                </Top>
                <Hr></Hr>
                <Bottom 
                    className="bottom" 
                    onSubmit={this.submitCommentHandler}
                >
                    <Input 
                        onChange={this.commentChangeHandler}
                        type="text"
                        value={this.state.newComments}
                        placeholder="Add a comment..."
                        className="comment-input"
                    />
                    <i className="fas fa-ellipsis-h"></i>
                </Bottom>
            </CommentSectionDiv>
        )
    }
    
}

export default CommentSection