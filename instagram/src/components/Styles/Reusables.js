import styled from "styled-components";

 //reusable styled components that can be imported into multiple components
 
 export const Username = styled.span`
  margin-right: 3%;
  font-family: "Open Sans";
  font-weight: bold;
  ${props => (props.bold ? `font-size:1.1rem` : null)};
`;