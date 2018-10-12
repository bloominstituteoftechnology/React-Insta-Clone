import React from 'react';

export default function InputComponent(props){
    return (
        <input placeholder='search' className={props.className} onChange={props.input}></input>
    );
}