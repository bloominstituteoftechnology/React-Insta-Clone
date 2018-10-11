import styled from "styled-components";

export const Header = styled.div`
         background-color: white;
         display: flex;
         justify-content: flex-start;
         align-items: center;
         margin-left: 5px;

         h3 {
           letter-spacing: 0.5px;
           align-self: center;
           margin-left: 10px;
           font-weight: bold;
           font-size: 15px;
         }`;



export const CommentWrapper = styled.div`
         width: 100%;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
         margin-bottom: 30px;

         .post-img {
           width: 100%;
           margin-top: 10px;
           margin-bottom: 20px;
         }

         .comment {
           margin-bottom: 10px;
         }

         .likes {
           display: flex;
           margin-top: 5px;
           margin-left: 10px;
           margin-bottom: 20px;
           line-height: 10px;
           font-size: 15px;
         }

         .icons-likes {
           margin: 10px;
           letter-spacing: 20px;
           font-size: 20px;
         }

         .post-user {
           margin-left: 10px;
           font-size: 14px;
           font-weight: bold;
         }

         .post-comments {
           font-size: 13px;
         }

         .add-comment {
           width: 96.6%;
           background: 0 0;
           height: 10px;
           outline: 0;
           border-top: 1px solid rgba(128, 128, 128, 0.253);
           padding: 8px 10px;
           text-align: left;
           font-size: 15px;
           z-index: 1;
         }

         .more-icon {
           z-index: -2;
           color: gray;
           position: relative;
           font-size: 18px;
           left: 575px;
           bottom: -35px;
         }
         p {
           color: gray;
           font-size: 12px;
           margin-left: 10px;
         }
         input {
           position: relative;
           top: 3px;
           border: 1px solid transparent;
           height: 30px;
           padding: 1px 5px 1px 15px;
           text-align: center;
           font-size: 15px;
           background-color: whitesmoke;
         }`;
