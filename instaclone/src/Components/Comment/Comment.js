import React, { Component } from 'react';
//import './Comment.css'
import styled from 'styled-components'
import {Username} from '../../Styles/Reusables'

const CommentWrapper = styled.div`
    margin:0rem 0rem;
    margin-bottom:.2rem; 
    display: flex;
`
const CommentUsername = styled(Username)`
    font-weight: bold;
    margin: 0rem;
    margin-right: .3rem;
`
const CommentText =  styled.span`
    margin-left: .3rem;
    font-weight: normal;
`

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <CommentWrapper>
                <CommentUsername>{this.props.username}<CommentText>{this.props.text}</CommentText></CommentUsername>
            </CommentWrapper>
          );
    }
}
 
export default Comment;