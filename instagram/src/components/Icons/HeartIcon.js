import React from 'react'
import Heart from 'react-feather/dist/icons/heart';


const HeartIcon = (props) => {
  let classes = 'heart-icon ';
  if (props.isLiked){
    classes += 'liked'
  }
  return (
    <Heart className={classes} onClick={props.handleLikes}/>
  )
}


export default HeartIcon;
