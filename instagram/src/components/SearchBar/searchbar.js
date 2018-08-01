import React from 'react';
import './searchbar.css';

const SearchBar = (props) => {
    return ( 
        <div className="row search-bar d-flex justify-content-start align-items-center"> 
            <i className="fab fa-instagram col-1 insta-icon"></i>
            <img className="instagram-logo" src="https://cdn.iphoneincanada.ca/wp-content/uploads/2017/06/Instagram_logo.svg_.png" alt=""/>
            <form className="col-5">
                <input placeholder="&#xf002; search" type="text" onChange={props.onChange} name="input" value={props.input}/>
            </form>
            <div className="col-3 d-flex justify-content-around top-icons">
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>



    );
}
 
export default SearchBar;