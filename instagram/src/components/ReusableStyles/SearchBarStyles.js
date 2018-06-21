
import Styled from 'styled-components';

export const Header = Styled.header`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 21px 10px;
    border-bottom: 1px solid lightgray;
    `;

    export const LogoWrapper = Styled.div`
    display: flex;
    align-items: center;
    `;

    export const LogoImage = Styled.img`
    width: 55px;
    height: 43px;
    margin-right: 15px;
    `;

    export const LogoText = Styled.img`
    width: 137px;
    height: 50px;
    padding-left: 15px;
    border-left: 1px solid lightgray;
    `;

    export const Search = Styled.input`
    width: 255px;
    height: 26px;
    border-radius: 3px;
    font-size: 16px;
    text-align: center;
    margin-right: 56px;
    `;

    export const IconsWrapper = Styled.div`
    width: 188px;
    padding-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 0.7%;
    `;

    export const LogOut = Styled.button`
    width: 35px;
    height: 35px;
    border: 2px solid black;
    border-radius: 10px;
    font-weight: bold;
    padding: 0;
    text-align: center;
    `;