import styled from 'styled-components';

const StyledCommentsDiv = styled.div`
    margin: 0 25px;

    > div > p > span { {/* username */}
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