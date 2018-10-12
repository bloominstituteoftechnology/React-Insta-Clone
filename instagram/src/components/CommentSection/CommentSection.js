import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import moment from 'moment';
import LikesSection from './LikesSection';
import styled from '../../../node_modules/styled-components';

const Form = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgray;
    width: 99.9%;
    height: 40px;
    font-size: 16px;
    margin-top: 15px;
`
const FormInput = styled.input`
    border: none;
    height: 100%;
    margin-left: 1.5%;
    width: 95%;
    height: 95%
`
const FormIcon = styled.i`
    color: black;
    width: 5%;
    display: flex;
    align-items: center;
    justify-content: center
`

const Span = styled.span`
    color: #abaeb2;
    margin: 15px 1.5%; 
`

export default class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            likes: 0,
            holder: "",
            bool: false
        }
        //window.unbeforeunload = this.savingComments;
    }
    componentDidMount() {
        this.setState({
            comments: this.props.comments,
            likes: this.props.likes
        })
        // localStorage.getItem('comments') && this.setState({
        //     comments: JSON.parse(localStorage.getItem('comments')),                
        // })
    }
    savingComments = () => {
        localStorage.setItem('comments', JSON.stringify(this.state.comments))
    }
    inputHandler = e => {
        const { value } = e.target;
        this.setState({
            holder : value
        })
    }
    addNewComment = e => {
        e.preventDefault();        
        this.setState({
            comments: [...this.state.comments, {text: this.state.holder}], holder: ""
        })
        this.savingComments()      
    }
    likeHandler = (e) => {        
        this.setState({
            bool: !this.state.bool
        })
    }
    
    render() {
        return  <div>
                    <LikesSection bool={this.state.bool} likes ={this.state.bool ? this.state.likes + 1 : this.state.likes} likeHandler={this.likeHandler} />
                    {this.state.comments.map(comment => <Comment key={Math.random()+comment.text} username={comment.username} text={comment.text} />)}
                    <Span>{moment(this.props.date, "MMMM Do YYYY, hh:mm:ss a").fromNow()}</Span>
                    <Form onSubmit={this.addNewComment}>
                        <FormInput type="text" onChange={this.inputHandler} placeholder="Add a comment..." value={this.state.holder}></FormInput>
                        <FormIcon className="fas fa-ellipsis-h"></FormIcon>
                    </Form>                    
                </div>
    }
}

CommentSection.propTypes = {
    comments: PropTypes.array.isRequired,
    date: PropTypes.string.isRequired
}