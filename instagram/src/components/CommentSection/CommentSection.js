import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentsContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    border-top: 1px solid lightgray;

    form {
        input {
            width: 80%;
            padding: 5px 10px;
            margin: 10px 0;
        }
    }
`


class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            commentText: '',
        }
    }

    componentDidMount() {
        if(localStorage.getItem(`theseComments${this.props.postIndex}`) !== null) {
            this.setState({ comments: JSON.parse(localStorage.getItem(`theseComments${this.props.postIndex}`))})
        }
        else {
            this.setState({
                comments: this.props.thisPost.comments
            })
        }      
    }

    componentDidUpdate() {
        localStorage.setItem(`theseComments${this.props.postIndex}`,JSON.stringify(this.state.comments))
    }

    addNewComment = (event) => {
        event.preventDefault();
        this.setState({
            comments: [...this.state.comments, { username: `${this.props.userName}`, text: `${this.state.commentText}` }],
            commentText: '' 
        })
    }

    deleteComment = (event) => {
        event.preventDefault();
        // console.log(event.currentTarget.dataset.index)
        this.setState({
            comments:  this.state.comments.filter((comment,index) => {
                return event.currentTarget.dataset.index !== index.toString();
            })
        })
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    render() {
        return (
            <CommentsContainer>
                {this.state.comments.map((comment,index) => {
                    return <Comment thisComment={comment} key={index} index={index} onClick={this.deleteComment} />
                })}
                <form onSubmit={this.addNewComment} >
                    <input onChange={this.handleChange} placeholder={`add new comment...`} name='commentText' value={this.state.commentText} />
                </form>
            </CommentsContainer>
        );
    }
}

CommentSection.propTypes = {
    thisPost: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes:  PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.object).isRequired
    })
}

export default CommentSection;