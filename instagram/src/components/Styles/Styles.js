import styled from 'styled-components';
import Sprites from '../PostContainer/SearchBar/750ca40ab535.png';

const IndvPost = styled.div`
    background-color: white;
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

const CommentContent = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const CommentUsername = styled.div`
    color: black;
    font-weight: 600;
    font-size: 15px;
`;

const CommentText = styled.div`
    padding-left: 10px;
`;

const CommentIcons = styled.div`
    padding-bottom: 10px;
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const Likes = styled.div`
    color: black;
    font-weight: 600;
    font-size: 15px;
    padding-bottom: 5px;
`;

const Icon = styled.div`
    ${props => (props.type === 'love' ? `width: 24px; height: 22px;` : null)}
    ${props => (props.type === 'bubble' ? `background: url(${Sprites}) no-repeat -104px -194px; width: 24px; height: 24px;` : null)}
    ${props => (props.type === 'upload' ? `background: url(${Sprites}) no-repeat -79px -194px; width: 21px; height: 24px;` : null)}
    ${props => (props.type === 'save' ? `background: url(${Sprites}) no-repeat -198px -130px; width: 19px; height: 24px;` : null)}
    ${props => (props.type === 'heart' ? `background: url(${Sprites}) no-repeat 0 -143px;` : null)}
    ${props => (props.type === 'red-heart' ? `background: url(${Sprites}) no-repeat -136px -32px;` : null)}
    ${props => (props.type === 'threedots' ? `background: url(${Sprites}) no-repeat -56px -178px; width: 15px; height: 3px;` : null)}
    ${props => (props.type === 'camera' ? `	background: url(${Sprites}) no-repeat -79px -169px; width: 22px; height: 22px;` : null)}
    ${props => (props.type === 'line' ? `height: 30px; width: 1px; border-right: 0.5px  solid lightgrey;` : null)}
    ${props => (props.type === 'logo' ? `background: url(${Sprites}) no-repeat -58px 0; width: 103px; height: 29px;` : null)}
    ${props => (props.type === 'compass' ? `background: url(${Sprites}) no-repeat -195px -156px; width: 23px; height: 23px;` : null)}
    ${props => (props.type === 'love' ? `background: url(${Sprites}) no-repeat 0 -143px; width: 24px; height: 22px;` : null)}
    ${props => (props.type === 'profile' ? `background: url(${Sprites}) no-repeat -222px -104px; width: 22px; height: 24px;` : null)}`

export {
    IndvPost,
    StyledImg,
    StyledPostHeader,
    StyledThumbnail,
    PostUsername,
    StyledApp,
    CommentContent,
    CommentText,
    CommentUsername,
    CommentIcons,
    Likes,
    Icon
}