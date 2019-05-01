import React from 'react';
import styled from 'styled-components';

export const CommentHolder = styled.div`
    max-height: 5rem;
    min-height: 3rem;
    overflow-y: scroll;
`;

export const CommentContent = styled.div`
    font-size: .75rem;
    display: flex;
`;

export const CommentText = styled.p`
    margin-bottom: .5rem;
`;

export const Time = styled.p`
    font-size: .55rem;
    color: gray;
    margin-bottom: .5rem;
    margin-top: .2rem;
`;

export const InputComment = styled.input`
    width: 100%;
    border: 0px;
    border-top: 1px solid gray;
    padding: 1rem 0;
    font-size: .7rem;
    font-weight: bold;
`;