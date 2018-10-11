import styled from 'styled-components';

export const LoginContainer = styled.div`
	width: 500px;
	height: 100%;
	background: white;
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 25px;
	margin-top: 5em;
	border: 1px solid silver;
	border-radius: 5px;
	font-family: "PT Sans Narrow", sans-serif;
`;

export const LoginInput = styled.input`
	display: flex;
	justify-content: center;
	padding-left: 20%;
	height: 20px;
	width: 100px;
	margin-bottom: 2em;
	margin-left: auto;
	margin-right: auto;
	border: 1px solid rgb(226, 226, 226);
	border-radius: 5px;

	${(props) =>
		props.userName
			? `background: url("../../assets/key-solid.svg") no-repeat`
			: `background: url("../../assets/lock-solid.svg") no-repeat;
  font-family: small-caption;
  font-size: 16px;`};
`;

export const LoginButton = styled.button`
	margin-left: 1em;
	height: 50px;
	width: 150px;
	padding: 2%;
	color: white;
	font-size: 24px;
	letter-spacing: 0.2em;
	font-family: "PT Sans Narrow", sans-serif;
	font-weight: bold;
	cursor: pointer;
	background: linear-gradient(to right, #fb6c42, #f91d8b);
`;

export const LoginAuth = styled.form`
	width: 200px;
	margin-bottom: 20%;
	border-radius: 25px;
`;

export const LoginParagraph = styled.p`
	font-size: 16px;
	font-weight: bold;
	text-decoration: underline;
	margin-left: 2.5em;
`;
