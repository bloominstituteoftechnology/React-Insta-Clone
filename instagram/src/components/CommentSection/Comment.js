import React, { Component } from 'react';
import styled from 'styled-components';

const CommentWrap = styled.div`
    margin: 5px 0;
    display: flex;
    align-items: baseline;
    > username {
        font-size: 1.4rem;
        font-weight: bold;
        margin-right: 5px;
    }
    > comment {
        font-size: 1.2rem;
    }
`

class Comment extends Component {
    
    render() { 
        return ( 
            <CommentWrap>
                <username>{this.props.name}</username>
                <comment>{this.props.comment}</comment>
            </CommentWrap>
         );
    }
}
 
export default Comment;