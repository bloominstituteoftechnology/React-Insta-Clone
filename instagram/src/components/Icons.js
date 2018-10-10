import React from "react";
import "../../src/App.styl";

const Icons = props => {
    return (
        <div className="icons">
        <div className="icons-small">
        <i className="fa fa-heart fa-2x" onClick={props.increment}></i>
        <i className="fa fa-comment fa-2x"></i>
        </div>
        </div>
    )
}

export default Icons;