import React from 'react';
import './SearchBarBox.css';
import SearchBar from './SearchBar';



function SearchBarBox(props) {
    return (
        <div className="SearchBarBox">
            <SearchBar />
            <div className="SearchFlex" >
                <a><img src ></img></a>
            
            </div>
            {/*<div>
                <form onInput={} >
                <input
                type="text"
                name=""
                placeholder="(&search image)Search"
                ></input>

                </form>
            
            </div>*/}

            <div>

            </div>

            


        </div>
    );
}

export default SearchBarBox;
