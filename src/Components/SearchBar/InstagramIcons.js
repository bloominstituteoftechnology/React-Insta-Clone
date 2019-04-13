import React from 'react';
import './InstagramIcons.css'
const InstagramIcons = (props) => {
    return (
        <div className= "icons">
            <img className= "compass" src = {props.compass} alt = "compass"/>
            <img className= "like" src = {props.like} alt = "like"/>
            <img className= "account" src = {props.person} alt = "account"/>
        </div>
    );
};

export default InstagramIcons;