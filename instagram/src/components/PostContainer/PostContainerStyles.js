import styled from 'styled-components';

export const PostingContainer = styled.div
`

  max-width: 605px;
  margin: 50px auto;
  border: 1px solid #ccc;
  border-radius: 8px;

`;

export const PostHeader = styled.div
`

  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;

  img {

    height: 60%;
    width: auto;
    border-radius: 50%;
    margin-left: 16px;
    margin-right: 10px;

  }

  h3 {

    font-size: 1.6rem;
    font-weight: bold;

  }

`;

export const PostInteractSection = styled.div
`

  display: flex;
  flex-direction: column;
  margin: 3px 17px;

  div > p {

    font-size: 2.3rem;
    font-weight: normal;
    cursor: pointer;

  }

  .bold {

    font-weight: bold;
    color: red;

  }

  p {

    font-size: 1.6rem;
    margin-top: 6px;
    font-weight: bold;

  }

  .fa-heart {

    margin-right: 17px;

  }

`;
