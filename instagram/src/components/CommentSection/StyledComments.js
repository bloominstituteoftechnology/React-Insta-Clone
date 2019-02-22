import styled from 'styled-components';

const StyledCommentsDiv = styled.div`
    margin: 0 25px;

    {/* username */}
    > div > p > span {
        font-weight: bold;
    }
`;

const StyledCommentInput = styled.input`
    border: none;
    margin-bottom: 20px;
    padding: 5px;
    width: 100%;
`;

export {StyledCommentsDiv, StyledCommentInput};