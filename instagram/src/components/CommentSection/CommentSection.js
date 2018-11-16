import React, {Fragment, Component} from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';

const TimeStamp = styled.p`
    margin-top: 5px;
    margin-bottom: 15px;
    font-size: 1.1rem;
    font-weight: 600;
    color: gray;
`

const CommentForm = styled.form`
    padding: 15px 0;
    border-top: 1px solid lightgray;
`

const CommentInput = styled.input`
    width: 100%;
    border: none;
    padding: 5px 0;
    font-size: 1.4rem;
    &:focus {
        outline: none;
    }
`

class CommentSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            username: window.localStorage.getItem('username')
        }        
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            comments: this.props.comments,
            commentText: ''
        })
    }

    changeHandler = (event) => {
        this.setState({
            ...this.state,
            commentText: event.target.value
        })
    }
    
    addComment = (event) => {
        event.preventDefault();
        this.setState({
            comments: [...this.state.comments, { 
                username: this.state.username,
                text: this.state.commentText
            }]
        }, () => {
            this.setState({
                commentText: ''
            })
        })
    }

    render() {
        return (
            <Fragment>
                {this.state.comments.map((comment, index) => <Comment comment={comment} key={index} />)}
                <TimeStamp>
                    {(moment(this.props.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()).toUpperCase()}
                </TimeStamp>
                <CommentForm className="commentform" onSubmit={this.addComment}>
                    <CommentInput type="text" name="commentText" placeholder="Add a comment..." value={this.state.commentText} onChange={this.changeHandler} />
                </CommentForm>
            </Fragment>
        );
    }
    
    
}


CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}


export default CommentSection;