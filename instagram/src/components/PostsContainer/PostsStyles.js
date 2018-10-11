import styled from 'styled-components';
import { customLayout } from '../SearchBar/SearchBarStyles';

export const Container = styled.div`
  max-width: 650px;
  width: 100%;
  margin: 125px auto;

  @media (max-width: 500px) {
    margin-top: 110px;
  }
`;

export const Card = styled.div`
  margin-top: 50px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.1);

  @media (max-width: 500px) {
    border-radius: 0;
  }
`;

export const Header = styled.header`
  width: 40%;
  padding: 15px;
  ${customLayout('flex-start', 'center')}
`;

export const UserThumbnail = styled.img`
  border-radius: 50%;
  width: 15%;
`;

export const Username = styled.h2`
  margin-left: 5%;
  font-weight: 700;
  font-size: 1.5rem;
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto;
`;

export const PostAction = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
`;

export const LikeButtonWrapper = styled.div`
  margin-right: 3%;
`;

export const LikeCounter = styled.p`
  width: 95%;
  margin: 10px auto;
  font-weight: 700;
  font-size: 1.5rem;
`;
