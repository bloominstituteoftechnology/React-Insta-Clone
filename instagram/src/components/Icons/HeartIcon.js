// import React from 'react'
import {Heart} from 'styled-icons/feather/Heart';
import styled from 'styled-components'


// const HeartIcon = (props) => {
//   let classes = 'heart-icon ';
//   if (props.isLiked){
//     classes += 'liked'
//   }
//   return (
//     <Heart className={classes} onClick={props.handleLikes}/>
//   )
// }
//
//
// export default HeartIcon;


const HeartIcon = styled(Heart) `
  width: 21px;
  height: 21px;
  cursor: pointer;

  ${props => (props.post ? `
    width: 25px;
    height: 25px; ` : null)}

    ${props => (props.isLiked ? `
      fill: #ED4956;
      color: #ED4956;` : null)}
`
export default HeartIcon;
