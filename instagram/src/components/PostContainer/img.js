import React from "react";
 const Img = props => {
    return (
        <img className="post-img" src={props.img.imageUrl} alt="user post"/>
    )
}
 export default Img;