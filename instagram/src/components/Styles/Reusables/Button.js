import styled from "styled-components";

export const Button = styled.button`
	  margin: 0;
	  padding: 0;
	  border: 0;
	  background: none;
	  font-family: inherit;
	  color: inherit;
	 -webkit-appearance: none;
	  outline:none;
	  
	  &:hover{
		cursor: pointer;
	  }
	
	  &:hover i{
		color: cornflowerblue;
		transform: scale(1.3);
	  }
`
