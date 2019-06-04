import React from 'react';
import './Form.css';

const Form = ({ inputValue, changeHandler, addComment }) => {
    return (
    <form onSubmit={(e) => addComment(e)}>
        <input
        className="form__input"
        type="text"
        value={inputValue}
        onChange={changeHandler}
        placeholder="Add a comment..."
        />
    </form>)
}

export default Form;