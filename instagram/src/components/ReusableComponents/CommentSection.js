import styled from "styled-components";

export const CommentText = styled.div`
    font-size: 15px;
    padding: 3px 3px;
`

export const CommentName = styled.strong`
    cursor: pointer;
`

export const CommentForm = styled.form`
    padding: 2px 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const AddComment = styled.input`
    width: 95%;
    border: 0;
    font-size: 14px;
    outline: 0;
    color: #262626;

    &::-webkit-input-placeholder {
        color: #99999C;
        font-size: 14px;
    }
    
    &::-moz-placeholder {
        color: #99999C;
        font-size: 14px;
    }
    
    &:-ms-input-placeholder {
        color: #99999C;
        font-size: 14px;
    }
    
    &::placeholder {
        color: #99999C;
        font-size: 14px;
    }
`

export const MoreIcon = styled.img`
    width: 13px;
    height: 14px;
    cursor: pointer;
`