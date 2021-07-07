import styled from 'styled-components';

const CommentsStyled = styled.div`
    display:flex;
    align-items: flex-start;
    width: 898px;
    max-width: 100%; 
`;

const CommentStyled = styled.div`
    margin-top: 15px; 
    display:flex;
    margin-left: 2.04498%;
    font-size: 1.5vw;
    font-size: 2.5vh;
    width: 100%;
    max-width: 100%;
`;

const UserCommentName = styled.h3`
    font-weight: bold;
    margin-right: .61349%;
    line-height: 3.5vh;
`;
const UserCommentText = styled.p`
    line-height: 3.5vh;
    align: left;
`;

const NewComment = styled.div`
    margin: 0 auto; 
    max-width: 100%;
`;
const TimeStamp = styled.h4`
    display: flex;
    align-items: flex-start;
    margin-left: 2.04498%;
    margin-top: 15px; 
    margin-bottom: 13px;
    color: gray;
    font-size: 1.5rem;
`;

const AddCommentInput = styled.input`
    width: 400px;
    height: 40px;
    border: none;
    max-width: 100%; 
`;
const AddComment = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-left: 2.04498%;
    border: none;
    width:898px;
    max-width: 100%;
`;

const PostHrLine = styled.hr`
    margin-bottom:15px;
    width:898px;
    max-width: 100%; 
    display:flex;
    align-items: flex-start;
    margin-left: 0;
    border: .5px solid #e7e7e7;
`;
const SubmitIcon = styled.div`
    margin-right: 2.0044vw;
    font-size: 1vw;
    font-size: 2vh;
    border: 1px inset black;
    margin-top: 10px;
    height: 20px;
    text-align: center;
    font-weight: bold;
`;



export {CommentsStyled, CommentStyled, UserCommentName,
UserCommentText, NewComment, TimeStamp, AddCommentInput,
PostHrLine, AddComment, SubmitIcon}



