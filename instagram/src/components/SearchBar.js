import React from 'react';

function SearchBar() {
    return (
        <div>
            <img className='instagram' src={require('../assets/icons/instagram_lettering.png')} alt='broke' />

            <form>
                <input type='text' placeholder='This doesnt work' />
            </form>
            <div>
                <img className='compass' src={require('../assets/icons/compass.png')} alt='broke' />
                <img className='heart' src={require('../assets/icons/heart.png')} alt='broke' />
                <img className='profile' src={require('../assets/icons/profile.png')} alt='broke' />
            </div>
        </div>
    );
}
export default SearchBar;