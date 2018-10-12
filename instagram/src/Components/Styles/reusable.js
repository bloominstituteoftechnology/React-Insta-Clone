import styled from "styled-components"

const Username = styled.span.attrs({
    fontSize: props => props.size,
})`
    display: inline-flex;
    font-weight: bold;
    margin-right: 5px;
    font-size: ${props => props.size}
`

export default Username;