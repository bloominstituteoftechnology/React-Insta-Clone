import styled from 'styled-components'

//this is a wrapper for the user thumbnail and username
export const UserInfoWrapper =  styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
    margin-left:1.5rem;
`
//default style for the user thumbnail
export const UserThumbnail = styled.img`
    max-width:35px;
    max-height:35px;
    border-radius:50%;
`
// defaults style for username
export const Username = styled.p`
    font-weight: 750;
    margin: 0 .5rem;
`
export const Button = styled.button`
    height: 25px;
    font-weight: bolder;
    border: none;
    border-radius:5px;

    background-color: ${props=> props.primary?"#0097F7":"white"};
    color:${props=>props.primary?"white":"black"};
` 

export const Input= styled.input`
    height: 25px;
    padding:0px 6px;
    margin-bottom:10px;
    border:1px solid lightgray;
    border-radius:5px;
    outline: none;

    &:focus{
        border:2px solid gray;
    }
`


export default { UserInfoWrapper, UserThumbnail, Username, Button, Input }
