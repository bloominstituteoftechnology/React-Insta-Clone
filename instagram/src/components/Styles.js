import styled from "styled-components";

export const StyledSearchBarContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin: 10px 0;
  border-radius: 4px;
`;

export const SearchForm = styled.form`
  width: 30%;
`;

export const SearchBarLeft = styled.div`
  display: flex;
  justify-content: space-around;
  width: 10%;
`;

export const SearchBarRight = styled.div`
  display: flex;
  justify-content: space-around;
  width: 15%;
`;

export const StyledSearchBar = styled.input`
  border-radius: 8px;
  padding: 8px;
  width: 100%;
`;



export const StyledPost = styled.div`
  max-width: 40%;
  margin: 0 auto;
  border: 1px solid black;
  margin-bottom: 50px;
  border-radius: 4px;
  padding: 0 10px;

  &>img {
    max-width: 70%;
    height: auto;
  }
`;

export const UserDiv = styled.div`
  text-align: left;
  margin-left: 12%;
  display: flex;
  align-items: center;
`;

export const IconBar = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
`;

export const Thumbnail = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 20px;
`;

export const UserName = styled.h2`
  display: inline;
`;

export const StyledCommentSection = styled.div`
  text-align: left;
  /* margin-left: 60px; */

  span {
    font-weight: bold;
  }
`;

export const TimeStamp = styled.p`
  color: #504a4a;
  text-align: left;
  /* margin-left: 60px; */
`;

export const LikeCounter = styled.p`
  text-align: left;
  /* margin-left: 60px; */
  margin-top: 0;
  font-weight: bold;
  `;

export const AddCommentBar = styled.input`
  padding: 10px;
  border-radius: 5px;
  width: 80%;

`;

export const ContentContainer = styled.div`
  margin-left: 15%;

  `;
export const LoginForm = styled.form`
  font-family: 'Cookie', cursive;
  font-size: 32px;
  width: 40%;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px;
  padding: 40px 0;
  text-align: center;

  input {
    padding: 20px;
    width: 50%;
    margin: 10px auto;
    border-radius: 10px;
  }
`;
