
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
    width: 198px;
    padding: 10px 10px 0 0;
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
    &:hover {
        cursor: pointer;
        filter: invert(100%);
    `;

    export const ShareIcon = Styled.img`
    width: 38px;
        height: 38px;
        margin: 10px;
        filter: invert(100%) brightness(100%) contrast(175%);
        border-radius: 50px;
        margin: -5.5px;
        &:hover {
            cursor: pointer;
            filter: brightness(150%);
        }
        `;

        export const Heart = Styled.img `
        width: 32px;
        height: 32px;
        margin-left: 10px;
        &:hover {
            cursor: pointer;
            filter: invert(100%) brightness(50%);
        }
        `;

        export const FriendIcon = Styled.img`
        width: 40px;
        height: 40px;
        &:hover {
            cursor: pointer;
            filter: invert(100%) brightness(50%);
        }
        `;

        export const ShareContainer = Styled.div`
        width: 28px; /*container-width*/
        height: 28px;
        border-radius: 50px;
       overflow: hidden;
       margin: 0; 
       `;