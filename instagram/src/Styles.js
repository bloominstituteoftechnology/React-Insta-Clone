import styled from "styled-components";

export const StyledHeader = styled.div`
  width: 80vw;
  left: 10vw;
  top: 0;
  border: 1px solid lightgrey;
  padding: 20px 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  position: fixed;
  background: white;
`;

export const LogoHeader = styled.div`
  width: 30%;
`;

export const LogoImage = styled.img`
  height: 30px;
  width: 30px;
  ${props => (props.instagram ? `width:100px` : `width:30px`)};
  ${props => (props.instagram ? null : `border-right:1px solid lightgrey`)};
`;

export const SearchForm = styled.form`
  width: 30%;
  display: flex;
  padding-left: 7%;
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 50px;
  text-align: left;
  text-indent: 5%;
  font-weight: bold;
  border-radius: 3px;
  border: 1px solid lightgrey;
  background: #fafafa;
`;

export const ResetButton = styled.button`
  width: 20%;
  font-size: 10px;
  ${props => (props.filtered === "not-filtered" ? `visibility:hidden` : null)};
`;

export const HeaderSprites = styled.div`
  width: 30%;
  opacity: 0.6;
  padding-top: 0;
`;

export const Sprite = styled.i`
  padding: 0 6% 0px;
`;

//PostContainer/Post
export const BodyContainer = styled.div`
  margin: 50px;
  background: white;
  border: 1px solid lightgrey;
  text-align: left;
`;

 export const BodyHeader = styled.div`
  display: flex;
  padding: 10px 5%;
`;

 export const UserThumbnail = styled.img`
  border-radius: 50%;
  width: 25px;
  height: 25px;
   margin-right: 1%;
`;

 export const Username = styled.p`
  ${props => (props.bold ? `font-weight: bold` : null)};
`;

 export const BodyImage = styled.img`
  width: 100%;
`;

 export const BodySprites = styled.div`
  padding: 10px 0 0 3%;
`;

 export const BodySprite = styled.i`
  font-size: 25px;
  margin-right: 2%;
`;

 export const LikeButton = styled.div`
  padding-left: 3%;
  font-weight: bold;
`;