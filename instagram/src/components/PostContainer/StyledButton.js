
import React from "react";
import styled from "styled-components";


const StyledButton = styled.button`

color : white;
margin : 5 px;
border : none;
padding : 6px 10px;
border-radius : 3px

${props => (props.type === "Yellow" ? `background: #FFFF00` : null)}
${props => (props.type === "Red" ? `background: #FF0000` : null)}
${props => (props.type === "Orange" ? `background: #FFA500` : null)}
`;

export default StyledButton;