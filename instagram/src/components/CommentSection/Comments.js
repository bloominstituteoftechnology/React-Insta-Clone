import React from 'react';

import PropTypes from 'prop-types'; 
import {CommentsStyled, CommentStyled, UserCommentName, UserCommentText} from './CommentSectionStyled.js';


class Comments extends React.Component {
    constructor(props){
        super(props)
        this.state = {comments: [], cmdCalled: false, placeholder: this.props.placeholder}; 
    }

    componentDidMount () {
        let storedComments; 
        if(localStorage.getItem('comments')){
            storedComments = JSON.parse(localStorage.getItem('comments'));
        } else {
            storedComments = this.props.comments; 
        }

        this.setState({comments:storedComments, cmdCalled: true, temp: "",});
      }

    handleOnChange = event => {
        this.setState({
            temp: event.target.value
        })
    }
    
    addNewComment = event => {
        
        const text = this.state.temp.slice();
        const comments = this.state.comments.slice(); 
        if(event.keyCode === 13 ){ 
            comments.push({username: this.props.userIn, text:text})
            
            event.target.value = ""
            localStorage.setItem("comments", JSON.stringify(comments));
            this.setState({comments: comments, temp:""});
        }

        
        
    }

    addNewCommentClick = () => {
        const text = this.state.temp.slice();
        const comments = this.state.comments.slice(); 
        if(text.length > 0){
            comments.push({username: this.props.userIn, text:text})
            localStorage.setItem("comments", JSON.stringify(comments));
            this.setState({comments: comments, temp:""});
        }
        console.log('clicked');
    }

    handleOnSubmit = event => {
        event.preventDefault(); 
    }  
    
    handleHover = event => {
        event.target.style.cursor = 'pointer';
    }

   


    render () {
        
        return (

            <CommentsStyled>  
              <CommentStyled>
                <UserCommentName onDoubleClick={this.props.handleDoubleClick}>{this.props.userName}</UserCommentName>
                <UserCommentText>{this.props.text}</UserCommentText>
              </CommentStyled>
              
            </CommentsStyled>
        ); 
    }
}


Comments.propTypes = {
    userName: PropTypes.string,
    text: PropTypes.string,
    time: PropTypes.string,
    handleDoubleClick: PropTypes.func
    
}

export default Comments 