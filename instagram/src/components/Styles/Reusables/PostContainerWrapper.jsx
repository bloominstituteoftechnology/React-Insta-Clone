import styled from 'styled-components';

const PostContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 10px;

  
  & > .post-title {
  margin-top: 10px;
  font-weight: 300;
  font-size: 1.6rem;
  color: #444;
  font-family: "Roboto", sans-serif;
}

& > img {
  height: auto;
  width: auto;
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
  margin-right: 20px;
}


 & > .username {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

`;

export default PostContainerWrapper;