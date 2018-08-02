import styled from 'styled-components';

const StyledPostsDiv = styled.div`
    @media (max-width: 768px) {
        flex-direction: row;
    }
`;

const StyledPost = styled.div`
    border: 1px solid lightgray;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
    width: 641px;
`;

const StyledPostHeader = styled.div`
    margin: 15px 15px 0;

    > img {
        border-radius: 50%;
        margin-right: 10px;
        width: 30px;
    }

    > span {
        font-weight: bold;
    }
`;

const StyledPostImg = styled.img`
    margin: 15px auto;
`;

const StyledStats = styled.div`
    margin: 0 25px;

    > p {
        margin-top: 5px;
        font-weight: bold;
    }
`;

export {StyledPostsDiv, StyledPost, 
    StyledPostHeader, StyledPostImg, StyledStats};