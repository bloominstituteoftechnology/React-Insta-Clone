import React from 'react';
import logo from './Instagram_logo.jpg';
import './SearchBar.css';



const SearchBar = () => {
    return (
    
            <header>
                <div className='logos'>
                    <i className='fab fa-instagram fa-3x'></i>
                    <img src={logo} alt='Instagram Logo' className='insta-logo'/>
                </div>
    

                <div className='input-field'>
                    <form>
                        <input
                            type='text'
                            className='fa fa-input search-input'
                            placeholder='  Search'
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
