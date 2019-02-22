import styled from "styled-components"

export const Username = styled.span.attrs({
    fontSize: props => props.size,
    fontWeight: props => props.weight,
})`
    display: inline-flex;
    margin-right: 5px;
    font-size: ${props => props.size}
    font-weight: ${props => props.weight}
`;

export default Username;