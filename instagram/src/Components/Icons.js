import React from "react";
import { MyIcons, IconsSmall } from "./Styles"
const Icons = props => {
    return (
       <MyIcons>
        <IconsSmall>
        <i className="far fa-heart fa-2x" onClick={props.increment}></i>
        <i className="far fa-comment fa-2x"></i>
        </IconsSmall>
        </MyIcons>
    )
}

export default Icons;