import styled from 'styled-components';

const Username = styled.div`
    padding: 2.8% 0.7% 0% 0%;
    font-weight: 650;
    display: flex;
    line-height: 20px;
    justify-content: space-around;

    ${props => (props.type === "primary" ? `font-weight: 750; padding: 0 0 0 2%;` 
        : null)}
`;

// ${props => (props.type === "primary" ? `background: #2196f3` : null)}


export default Username