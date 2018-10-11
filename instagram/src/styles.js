import styled from "styled-components";

export const LoginPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:black;
    background-image:
        radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
        radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
        radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px),
        radial-gradient(rgba(255,255,255,.4), rgba(255,255,255,.1) 2px, transparent 30px);
    background-size: 550px 550px, 350px 350px, 250px 250px, 150px 150px;
    background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
    `;

export const Header = styled.header`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

export const LogoHeader = styled.div`
    width: 10%;
    padding-left: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    i {
        padding-right: 25px;
        border-right: 1px solid black;
    }
    `;

export const LogoImage = styled.img`
    width: auto;
    height: 50px;
    cursor: pointer;
    `;

export const SearchDiv = styled.div`
    width: 20%;
    `;

export const StyledInput = styled.input`
    background: transparent;
    color: black;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    text-align: center;
    ${props => (props.left ?
         `text-align: left
         margin-left: -3%
         padding-left: 3%
         width: 96.5%
         ` 
         : null)}
    ${props => (props.login ? `color: grey` : null)}
    `;

export const UserDiv = styled.div`
    width: 10%;
    padding-right: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    i:last-child {
        cursor: pointer;
    }
    `;

export const PostWrapper = styled.div`
    margin: 0 auto;
    width: 50%;
    font-weight: bold;
    border: 1px solid lightgrey;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    `;

export const PostHeader = styled.div`
    display: flex;
    align-items: center;
    `;

export const Avatar = styled.img`
    border-radius: 50%;
    margin-right: 1%;
    margin-left: 3%;
    margin-bottom: 10px;
    height: 30px;
    width: auto;
    `;

export const StyledText = styled.p`
    font-weight: normal;
    margin-bottom: 10px;
    padding-right: 5px;
    ${props => (props.timestamp ? 
        `font-size: 12px
        color: grey` 
        : null)}
    ${props => (props.bold ? `font-weight: bold` : null)}
    ${props => (props.bolder ? `font-weight: bolder` : null)}
    `;

export const PostedImageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;
    `;

export const PostedImage = styled.img`
    margin-bottom: 10px;
    width: 100%;
    height: auto;
    `;

export const PostFooter = styled.div`
    margin-bottom: 5px;

    i {
        padding-right: 5px;
        padding-bottom: 5px;
    }
    `;

export const CommentWrapper = styled.div`
    width: 100%;
    margin-left: 3%;
    font-weight: bold;
    `;

export const Comments = styled.div`
    width: 100%;
    display: flex;
    align-items: space-evenly;
    `;

export const AddComments = styled.div`
    width: 100%;
    margin-top: 5px;
    `;