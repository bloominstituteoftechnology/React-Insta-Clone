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
    img {
        width: auto;
        height: 50px;
        cursor: pointer;
    }
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
