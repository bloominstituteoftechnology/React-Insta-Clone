import React from 'react';

export default function ImagesComponent(props){
    return (
        <img src = {props.src} alt={props.alt} className={props.displayStyle} />
    );
}




