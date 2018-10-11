import styled from 'styled-components';

const Username = styled.h2`
font-size: 15px;

${props => (props.type === 'post' ? `font-weight: bold;` : null)}
${props => (props.type === 'comment' ? `font-weight: normal;` : null)}
`;

export default Username;