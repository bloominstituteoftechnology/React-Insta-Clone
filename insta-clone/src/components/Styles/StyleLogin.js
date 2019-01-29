import styled from "styled-components";

export const VWrapper = styled.video`
         object-fit: cover;
         z-index: -100;`;
export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  postiion: realtive;
`;

export const LoginHeader = styled.h1`
  display: flex;
  flex-direction: column;
  position: absolute;
  font-family:'Siry';
  bottom: 550px;
  color: white;
  border-shadow: 20px 20px;
  font-size: 80px;
  z-index: 3;
`;
export const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 50px;
  line-height: 100px;
  padding: 40px;
  width: 300px;
  heigh: 200px;
  z-index: 2;
  background: whitesmoke;
  box-shadow: 0px 0px 20px 10px black;
  input {
    height: 25px;
    padding: 10px 10px;
    border-radius: 4px;
    margin-bottom: 20px;
  }

  button {
    margin-top: 30px;
  }
`;
