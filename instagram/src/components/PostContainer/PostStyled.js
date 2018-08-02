import styled from 'styled-components'; 

const Posting = styled.div`
    max-width: 100%; 
`;

const Likes = styled.h3 `
    display:flex;
    align-items: flex-start;
    margin-top:12px; 
    margin-bottom:15px;
    margin-left: 2.04498%;
    font-weight: bold;
    font-size: 1.5rem;
`;

const PostIcons = styled.div`
    display:flex;
    align-items: flex-start;
    margin-left: 2.04498%;
    margin-top: 10px;
    font-size: 2.5rem;
    width: 50px; 
`;

const Icon = styled.i`
    margin-right:40%;
`;

const PostHeader = styled.div `
    display:flex;
    align-items: flex-start;
    width: 100px;
    margin-top: 15px;
    font-weight: bold;
    font-size: 1.5rem;
    margin-left: 2.04498%; 
    text-align: center;
    max-width: 100%;
`;

const ThumbNail = styled.img`
    width: 30.06748%;
    height: 2.04498%;
    border-radius: 50%; 
    margin-right: 2.04498%;
    max-width: 100%;
`;

const PostUserName = styled.div`
    margin-top: 5px; 
`;

const PostImage = styled.img`
    max-width: 100%;
    width: 600px; 
    display:flex;
    align-items:flex-start;
    margin-top: 15px;
`;

const FlipIcon = styled.i`
    transform: rotateY(180deg); 
`;

const HRLine = styled.hr`
    margin-bottom:30px;
    margin-top: 15px;
    width:898px;
    max-width: 100%; 
    display:flex;
    align-items: flex-start;
    margin-left: 0;
    border:4px solid #E1E4e8;
    @media(max-width: 500px){
        display: none;
    }

`



export{Posting, Likes, PostIcons, Icon, PostHeader,
ThumbNail, PostUserName,PostImage, FlipIcon, HRLine}