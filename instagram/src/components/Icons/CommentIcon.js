import React from 'react'
import { MessageCircle } from 'styled-icons/feather/MessageCircle';
import styled from 'styled-components'


// const CommentIcon = () => {
//   return (
//     <MessageCircle className='comment-icon'/>
//   )
// }
// export default CommentIcon;


const CommentIcon = styled(MessageCircle)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  transform: rotateY(180deg); 
`

export default CommentIcon;
