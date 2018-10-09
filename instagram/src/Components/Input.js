import React from "react";

const Input = props => {
    return (
        <div className="input-box">
            <div className="inputs">
        <input type="text" placeholder="Add a comment ..." />
        <i class="fas fa-ellipsis-h"></i>
        </div>
        </div>
    )
}

export default Input;