import styled, {css} from 'styled-components';

export const Button = styled.button`
  background: dodgerblue;
  border-radius: 5px;
  color: white
  margin: 0 1em;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 700;

`;

// const input = styled.input`
//   background-color: yellow;
//   padding: 20px;
// `;

export const Login = styled.div`
  width: 20vw;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const LoginContainer = styled.div`
  height: 500px;
  background: orangered;
  padding: 40px 60px;
  justify-content: center;
  width: 700px;
  margin: 200px auto;
  background: black;
`;

export const LoginInput = styled.input`
  width: 100%;
  margin-bottom: 20px;
  align-self: center;
  padding: 15px;
`;

export const Insta = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  align-content: baseline;
  padding-bottom: 80px;
`;
export const Logo = styled.h2`
  font-family: 'Oleo Script', cursive;
  font-size: 40px;
`;
