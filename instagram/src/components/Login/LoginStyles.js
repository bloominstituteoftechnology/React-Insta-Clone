import React from "react";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 150px;
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CamImg = styled.img`
  width: 30%;
  height: 200px;
`;

export const LogoImg = styled.img`
  width: 60%;
  height: 200px;
`;

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const UserInput = styled.input`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignInButton = styled.button`
  margin-top: 30px;
  width: 20%;
`;
