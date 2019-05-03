import styled, { css } from 'styled-components'

const Img = styled.img`
    margin-left: 15px;
    width: 35px;
    border-radius: 50%;
    ${props =>
        props.postImg && css`
        max-width: 640px;
        width: 100%;
        border-radius: 0px;
        margin: 0px;
    `}
`

export default Img;