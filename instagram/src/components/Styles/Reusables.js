import styled, {css} from 'styled-components';

const Bolded = styled.span`
    letter-spacing: .03rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    margin-right: 5px;
    ${props => 
        props.likes &&
        css`
            margin-bottom: 2px;
        `
    }
`

export default Bolded;