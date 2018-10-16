import React from "react";

const Input = props => {
    return (
        <form onSubmit={props.add}>
        <div className="input-box">
            <div className="inputs">
        <input type="text" placeholder="Add a comment ..."  
        name="user" onChange={props.change} value={props.value}/>
        <i className="fas fa-ellipsis-h"></i>
        </div>
        </div>
        </form>
    )
}

export default Input;