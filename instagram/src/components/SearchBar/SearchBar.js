import React from 'react';
import SearchForm from './SearchForm';
// import './SearchBar.css';




function SearchBar(props) {
    return (
        <React.Fragment>
            <div className="SearchFlex" >
                <a><img src ></img></a>
            </div>
            <div>
                <ul><li>Hello</li></ul>
                <SearchForm />
               {/*} 
               <SearchForm />
               
               
                    <form>
                    <input
                        type="text"
                        name=""
                        placeholder="(&search image)Search"
                    >           
                    </input>

                </form>
                        */} {/*onInput = {} */}
            </div>
            <div>
                <i></i>
                <i></i>
                <i></i>
            </div>


        </React.Fragment>
    );
}

export default SearchBar;