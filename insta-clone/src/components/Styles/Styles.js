import React from 'react';
import Styled from 'styled-components';

const CommentWrap = Styled.div`
    font-size: 1.6rem;
    line-height: 2rem;
    display: flex;
    justify-content: flex-start;
`;

const CommentInput = Styled.div`
    display: inline-block;
    font-size: 1.5rem;

    ${props => (props.type === 'user' ? `font-weight: bold;` : null)}
    ${props => (props.type === 'comment' ? `padding-left: 0.5rem;` : null)}
    
`;

export default (CommentWrap, CommentInput);