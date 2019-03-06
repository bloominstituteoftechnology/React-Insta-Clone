import styled from 'styled-components';
import { customLayout } from '../SearchBar/SearchBarStyles';

export const LoginWrapper = styled.div`
  border: 1px solid #eaeaea;
  max-width: 400px;
  width: 100%;
  margin: 100px auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.1);
`;

export const LogoWrapper = styled.div`
  margin-top: 80px;
  ${customLayout('center', 'center')}
`;

export const Logo = styled.img`
  width: 55%;
  height: auto;
`;

export const FormGroup = styled.form`
  width: 75%;
  margin: 20px auto;
  margin-bottom: 120px;
  display: flex;
  flex-wrap: wrap;
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  padding: 10px;
  background-color: #fafafa;
  font-size: 1.4rem;

  ::placeholder {
    color: #999;
  }

  :focus {
    outline: none;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 35px;
  margin-top: 15px;
  border: 1px solid #3897f0;
  border-radius: 3px;
  font-size: 1.4rem;
  color: #fff;
  background-color: #3897f0;
  cursor: pointer;
`;
