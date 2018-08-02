 import styled from 'styled-components';

 export const PostWrapper = styled.div`
   width: 50%;
   max-width: 450px;
   margin: 25px auto;
   border: 1px solid #ddd;
   border-radius: 5px;
   background: white;
   box-shadow: 0 5px 15px rgba(0,0,0,0.3);

   &:last-child{
     margin-bottom: 100px;
   }

   @media (max-width: 756px){
     width: 75%;
   }

   @media (max-width: 430px){
     width: 90%;
   }
 `;

 export const PostHeading = styled.div`
   height: 75px;
   width: 50%;
   padding-left: 15px;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   margin-top: 10px;
 `;

 export const UserIcon = styled.div`
   height: auto;
   width: 20%;

   @media (max-width: 430px){
     display: none;
   }
 `;

 export const IconImg = styled.img`
   border-radius: 50%;
   width: 100%;
   height: auto;
 `;

 //will remove this to reusable later
 export const UserName = styled.div`
   margin-left: 15px;
 `;

 export const PostImageWrapper = styled.div`
   margin-top: 15px;
 `;
