import React, { Component } from 'react';
import styled from 'styled-components';

const CommentWrap = styled.div`
    margin: 5px 0;
    display: flex;
    align-items: baseline;
`    
const Username = styled.div`
        font-size: 1.4rem;
        font-weight: bold;
        margin-right: 5px;
`
const Com = styled.div`
        font-size: 1.2rem;
`

class Comment extends Component {
    
    render() { 
        return ( 
            <CommentWrap>
                <Username>{this.props.name}</Username>
                <Com>{this.props.comment}</Com>
            </CommentWrap>
         );
    }
}
 
export default Comment;