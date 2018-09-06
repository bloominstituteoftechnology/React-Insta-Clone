import styled from 'styled-components';
import { css } from 'styled-components';

const BtnDiv = styled.div``;
const LogOutBtn = styled.button``;
const HeaderIconsDiv = styled.div``;
const HeaderInputField = styled.input``;
const HeaderInputDiv = styled.div``;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 23px 0 12px 0;
    border-bottom: 1px solid gray;
    width: 100%;
    position: fixed;
    background: white;
    z-index: 1;

    & > ${ HeaderInputDiv } {
        border: 1px solid gray;
        border-radius: 5px;
        text-align: center;
        margin-top: 14px;
        margin-right: 65px;
        padding-left: 10px;
        padding-right: 20px;
        height: 36px;
        font-size: 17px;
        color: gray;
        display: flex;
        align-items: center;
        width: 267px;

        & > .fa-search {
            margin-left: 86px;
        }

        & > ${ HeaderInputField } {
            border: 0;
            font-size: 21px;
            width: 150px;
            padding-left: 4px;
        }
    } // HeaderInputDiv

    & > ${ HeaderIconsDiv } {
        display: flex;
        justify-content: space-between;
        font-size: 32px;
        width: 181px;
        padding: 20px 0px;
        margin-right: 12px;

        & > *:hover {
            cursor: pointer;
            color:gray;
        }
    }

    & > ${ BtnDiv } {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;

        & > ${ LogOutBtn } {
            border: 1px solid black;
            border-radius: 5px;
            padding: 10px;
            background-color:white;
    
            &:hover {
                background: black;
                color: white;
                cursor: pointer;
            }
        }
    }
`; // Header

const Img = styled.img`
    ${ props => 
        (props.instagramIcon && css`
            max-width: 50px;
            max-height: 50px;
            border-right: 1px solid black;
            padding-right: 25px;
            padding-bottom: 5px;

            &:hover {
                filter:opacity(30%);
            }
        `) || 
        (props.instagramLogo && css`
            max-height: 57px;
            padding-left: 19px;
            padding-top: 5px;

            &:hover {
                filter:opacity(30%);
            }
        `)
    }
`; // Img

export { Header, Img, HeaderInputDiv, HeaderInputField, HeaderIconsDiv, LogOutBtn, BtnDiv };
