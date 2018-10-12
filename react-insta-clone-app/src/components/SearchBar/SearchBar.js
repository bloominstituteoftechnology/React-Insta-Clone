import React from 'react';
import "./SearchBar.css";
import logo from "../../img/Instagram-Logo.png";
import title from "../../img/Instagram-Title.png";
import compass from "../../img/compass-05.svg";
import heart from "../../img/heart-2.svg";
import person from "../../img/single-01.svg";

function ImagesComponent(props){
    return (
        <img src = {props.src} alt={props.alt} className={props.className} />
    );
}
function InputComponent(props){
    return (
        <input onChange={props.asdf} placeholder='search' className={props.className}></input>
    );
}

export default class SearchBar extends React.Component {
    handleChange = event => {
        this.props.filterPosts(event.target.value);
    };
    render(){
        return (
            <div className={this.props.className}>
                <div className='title-images'>
                    <ImagesComponent src={logo} alt='instagram-logo' className='logo' />
                    <div className='line-break'></div>
                    <ImagesComponent src={title} alt='instagram-title' className='title' />
                </div>          
                <InputComponent type='search' asdf={this.props.filterPosts} className='search-input' />            
                <div className='title-icons'>
                    <ImagesComponent src={compass} alt='compass-icon' />
                    <ImagesComponent src={heart} alt='heart-icon' />
                    <ImagesComponent src={person} alt='person-icon' />
                </div>
            </div>
        );
    }
}