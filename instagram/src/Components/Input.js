import React from "react";
import { InputBox, Inputs } from "./Styles"

const Input = props => {
    return (
        <form onSubmit={props.add}>
       <InputBox>
            <Inputs>
        <input type="text" placeholder="Add a comment ..."  name="user" onChange={props.change} value={props.value}/>
        <i className="fas fa-ellipsis-h"></i>
        </Inputs>
        </InputBox>
        </form>
    )
}

export default Input;