import styled from "styled-components";

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
    input {
        background: transparent;
        color: black;
        width: 100%;
        height: 30px;
        border-radius: 5px;
        text-align: center;
}   
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
    `;

export const PostHeader = styled.div`
    display: flex;
    align-items: center;

    img {
        border-radius: 50%;
        margin-right: 1%;
        margin-left: 3%;
        margin-bottom: 10px;
        height: 30px;
        width: auto;
    }
    `;

export const PostedImage = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;

    img {
        margin-bottom: 10px;
        width: 100%;
        height: auto;
    }
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
    margin-bottom: 20px;
    margin-left: 3%;
    font-weight: bold;
    `;

export const Comments = styled.div`
    width: 100%;
    display: flex;
    font-weight: normal;

    p:first-child {
        font-weight: bold;
        padding-right: 2%;
        height: 16px;
        margin-top: 3px;
    }

    p {
        padding-top: 5px;
        padding-bottom: 5px;
    }
    `;

export const AddComments = styled.div`
    width: 100%;
    margin-top: 5px;

    input {
        background: transparent;
        color: lightgray;
        width: 95%;
        height: 30px;
        border-radius: 5px;
        text-align: left;
        padding-left: 3%;
        border: 1px solid lightgray;
        margin-left: -3%;
    } 

    p {
        margin-bottom: 10px;
        color: grey;
        font-size: 12px;
    }
    `;