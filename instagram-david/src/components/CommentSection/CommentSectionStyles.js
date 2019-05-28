import styled from "styled-components";
export const CommentSectionContainer = styled.div`
  padding: 15px;
`;
export const LikesCommentsIcons = styled.div`
  margin-bottom: 15px;
`;
export const Icon = styled.div`
  margin-right: 20px;
`;
export const LikesCommentsStats = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const LikesCommentsStatistic = styled.p`
  margin-bottom: 5px;
`;
export const CommentForm = styled.form`
  width: 95%;
  margin: 10px auto 0px;
  display: flex;
  justify-content: space-between;
`;
export const CommentInput = styled.input`
  width: 80%;
  padding: 10px;
  border: none;
`;
export const SubmitComment = styled.button`
  width: 100px;
  color: white;
  background-color: #3897f0;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 1.5rem;
  :active {
    transform: scale(0.99);
  }
`;
