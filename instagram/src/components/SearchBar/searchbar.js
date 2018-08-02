import React from 'react';
import './searchbar.css';
import styled from 'styled-components';

const InstagramLogo = styled.img`
    padding-top: 5px;
    margin-left: 10px;
    width:18%;
`

const SearchBar = (props) => {
    return ( 
        <div className="row search-bar d-flex justify-content-start align-items-center"> 
            <i className="fab fa-instagram col-1 insta-icon"></i>
            <InstagramLogo src="https://cdn.iphoneincanada.ca/wp-content/uploads/2017/06/Instagram_logo.svg_.png" alt=""/>
            <form className="col-5">
                <input placeholder="&#xf002; search" type="text" onChange={props.onChange} name="input" value={props.input} className="input-search"/>
            </form>
            <div className="col-3 d-flex justify-content-around top-icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i onClick={props.logOut} className="far fa-user logout-btn"></i>               
            </div>
        </div>



    );
}
 
export default SearchBar;