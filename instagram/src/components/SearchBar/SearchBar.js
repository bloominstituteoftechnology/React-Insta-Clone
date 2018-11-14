import React from 'react';
import logo from './Instagram_logo.jpg';
import './SearchBar.css';



const SearchBar = (props) => {
    return (
    
            <header>
                <div className='logos'>
                    <i className='fab fa-instagram fa-3x'></i>
                    <img src={logo} alt='Instagram Logo' className='insta-logo'/>
                </div>
    

                <div className='input-field'>
                    <form>
                        <input
                            className='fa fa-input search-input'
                            name='filteredSearch'
                            onChange={props.handleSearchInput}
                            placeholder='  Search'
                            type='text'
                            value={props.filteredSearch}
                        />
                    </form>
                </div>
                
                <div className='icons'>
                    <i className="far fa-compass fa-2x"></i>
                    <i className="far fa-heart fa-2x"></i>
                    <i className="far fa-user fa-2x"></i>
                </div>

            </header>
        
    );
}



export default SearchBar;
