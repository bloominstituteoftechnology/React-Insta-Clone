import React from "react";

const SearchBar = () => {
    return (
        <div>
            <img src={require('../../img/ig_logo.png')} alt="logo"/>
            <form>
                <label>
                    <input type="text" name="name" />
                </label>
            </form>
            <img src={require('../../img/ig_icons.png')} alt="icons"/>
        </div>
    )
}

export default SearchBar;