import React from 'react';
import './SearchBar.css';



function SearchForm(props) {
    return (
        <React.Fragment>
            
             <form>
                    <input 
                    type="text"
                    name=""
                    onChange={props.handleChange}
                    placeholder="Search">
            
                    </input>
                    <i class="fas fa-search" type="submit"></i>

                </form>

    

        </React.Fragment>
    );
}

export default SearchForm;


{/*onInput = {} */ }