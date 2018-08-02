import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fafafa;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Box = styled.div`
  background-color: white;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e6e6e6;
  height: ${props => props.login ? '300px' : '450px'};
`
export const SecondaryBox = Box.extend`
  margin-top: 10px;
  height: 50px;
`
export const InnerBox = styled.form`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`
export const SecondaryInnerBox = InnerBox.extend`
  font-size: 14px;
  flex-direction: row;
  justify-content: center;
`
export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
export const LogoImg = styled.img`
  width: 80%;
  height: auto;
`
export const ErrorMessage = styled.p`
  color: #999;
  font-size: 14px;
`
export const Input = styled.input`
  box-sizing: border-box;
  padding-left: 8px;
  outline: none;
  border: 1px solid #efefef;
  background-color: #fafafa;
  font-size: 12px;
  width: 100%;
  height: 38px;
  margin: 3px 0;
  color: black;
`
export const Button = styled.button`
  outline: none;
  font-size: 14px;
  background-color: rgb(56, 151, 240);
  border-radius: 3px;
  padding: 0 12px;
  color: #fff;
  font-weight: bold;
  width: 100%;
  line-height: 26px;

  &:disabled {
    opacity: .3;
  }
  &:focus {
    outline: none;
  }
`
export const Link = styled.button`
  font-size: 14px;
  border: none;
  outline: none;
  text-decoration: none;
  color: rgb(56, 151, 240);
  cursor: pointer;
`
export const Text = styled.p`
  padding-right: 4px;
`
export const HeadInfoText = styled.p`
  font-weight: 600;
  line-height: 20px;
  font-size: 17px;
  color: #999;
  text-align: center;
`