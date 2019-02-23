import styled from 'styled-components';

export const SearchWrapper = styled.div`
	position: fixed;
	top: 0;
	height: 50px;
	width: 100%;
	border-bottom: 1px solid #3333;
	line-height: 70px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #ffffff;
	padding: 1%;
	margin: 0;
`;

export const SearchImageWrapper = styled.div`
	${(props) =>
		props.image
			? `height: 50px;
  display: flex;
  justify-items: center;
  width: 9%;
  justify-content: space-between;`
			: null} ${(props) =>
			props.social
				? `display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  width: 14%;`
				: null};
`;

export const SearchImage = styled.img`
	${(props) =>
		props.logo
			? `margin-right: 15px;
padding-right: 15px;
width: 9em;
border-right: 1px solid silver;`
			: null} ${(props) => (props.camera ? `height: 100%;` : null)} ${(props) =>
			props.compass ? `height: 30px; width: 30px;` : null} ${(props) =>
			props.heart ? `height: 30px; width: 30px;` : null} ${(props) =>
			props.user ? `height: 30px; width: 30px;` : null};
`;

export const SearchInput = styled.input`
	border-radius: 3px;
	border: 1px solid #e6e6e6;
	text-align: center;
	padding: 4px;
`;
