import React from 'react';
import './SearchBar.css';



const SearchBar = () => {
    return (
    
            <header>
                <div className='logos'>
                    <i className='fab fa-instagram fa-3x'></i>
                    <h1 className='insta-logo'>Instagram</h1>
                </div>

                <div className='input-field'>
                    <form>
                        <input
                            type='text'
                            className='fa fa-input'
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
