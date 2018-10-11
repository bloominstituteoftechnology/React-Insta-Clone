import styled from 'styled-components';

const IndvPost = styled.div`
    background-color:white;
    border: 1px solid lightgray;
    border-radius: 3px;
    width: 616px;
    height: auto;
    margin: 50px auto;
`;

const StyledImg = styled.img`
    width: 614px;
    height: auto;
`;

const StyledPostHeader = styled.div`
    display: flex;
    align-items: center;
    height: 70px;
    padding-left: 10px;
`;

const StyledThumbnail = styled.img`
    height: 30px;
    border-radius: 50%;
`;

const PostUsername = styled.h3`
    font-size: 15px;
    padding-left: 15px;
    padding-top: 5px;
`;

const StyledApp = styled.div`
  background-color: #fafafa;
`;

export {
    IndvPost,
    StyledImg,
    StyledPostHeader,
    StyledThumbnail,
    PostUsername,
    StyledApp
}