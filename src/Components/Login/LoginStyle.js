import styled from 'styled-components';

export const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ddd;
  padding-top: 100px;
`;

export const LoginForm = styled.form`
  width: 50%;
  height: 50%;
  margin: 0px auto;
  background: white;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  @media (max-width: 756px){
    width: 80%;
  }

  @media (max-width: 430px){
    width: 95%;
  }
`;

export const FormLabel = styled.label`
  margin: 10px 0;
`;

export const FormInput = styled.input`
  margin: 10px 0;
  width: 40%;
  height: 10%;
  text-align: center;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 2rem;

  @media (max-width: 756px){
    width: 60%;
  }

  @media (max-width: 430px){
    width: 75%;
  }
`;
