import React from 'react';

export default function InputComponent(props){
    return (
        <input placeholder={props.placeholder} className={props.className}></input>
    );
}