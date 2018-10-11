
import styled from 'styled-components';

export const AppStyles = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 900px;
  margin: 0 auto;
  font-size: 62.5%;
  box-sizing: border-box;
`;

export const InputStyles = styled.input`
  width: 75%;
  height: 30px;
  margin-top:5px;
`;

export const InputHeaders = styled.h2`
  width: 25%;
`;

export const LoginBox = styled.div`
  max-width: 30%;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  align-items: flex-start;
  flex-flow: column wrap;
  border: 1px solid lightgrey;
  padding-left: 40px;
  padding-bottom: 30px;
  background-color: whitesmoke;
`;

export const LoginContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const LoginButton = styled.button`
  width: 50%;
  height: 40px;
  font-size: rem;
  margin-top:25px;
  background-color: white;
`;

export const CommentContainer = styled.div`
  width: 90.25%;
  height: auto;
  margin: 0 auto;
  box-sizing:border-box;
  margin-bottom: 30px;
  border-bottom: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-left: 2%;
  padding-bottom: 20px;
`;

export const CommentCombo = styled.div`
  display: flex;
  align-items: baseline;
  height: 40px;
`;

export const FontAwesomes = styled.i`
  font-size: 1.8rem;
  margin-right: 22px;
  margin-top: 15px;
`;

export const Commenter = styled.h3`
  font-size: 1rem;
  height: auto;
`;

export const CommentText = styled.p`
  font-size: 1rem;
  margin-left: 10px;
  height: auto;
`;

export const Timestamp = styled.p`
  font-size: .8rem;
  width: 97%;
  color: grey;
  padding-bottom: 15px;
  border-bottom: 1px solid lightgrey;
`;

export const AddComment = styled.input`
  width: 95%;
  height: 30px;
  background-color: white;
  border: white;
  font-size: 1rem;
`;