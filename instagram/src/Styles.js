import styled from 'styled-components'
import IGLogoFile from './img/instagram-logo.png'
import IGWidgetFile from './img/instagram-widget.png'

export const SearchBarDiv = styled.div `
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    position: sticky;
    top: 0;
    border-bottom: 1px solid lightgray;
`

export const LogoContainer = styled.div`
    display: flex;
    width: 19%;
    justify-content: flex-start;
    align-items: center;
`

export const IGWidget = styled.div `
    background-image: url(${IGWidgetFile});
    width: 50px;
    height: 50px;
    background-position: center;
    background-size: cover;
`

export const LineSpacer = styled.div `
    border-left: 0.5px solid lightgrey;
    width: 20px;
    height: 40px;
    margin-left: 26px;
`

export const IGLogo = styled.div `
    background-image: url(${IGLogoFile});
    width: 45%;
    height: 50px;
    background-position: center;
    background-repeat: no-repeat;
`

export const SearchInput = styled.input `
    height: 10px;
    text-align: center;
    height: 25px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid lightgrey;
    background-color: #FAFAFA;
    margin-right: 8%;
`
export const IconContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    width: 11%;
`