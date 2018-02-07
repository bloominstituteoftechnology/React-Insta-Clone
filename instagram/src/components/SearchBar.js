import React from 'react';

function SearchBar() {
    return (
        <div className='search-container'>
        <div className='logos'>
            <div className='small-logo'><img className='icon' src={require('../assets/icons/IG_icon.png')} alt='broke' /></div>
            <div className='logo'><img className='instagram' src={require('../assets/icons/instagram_lettering.png')} alt='broke' /></div>
        </div>

            <form>
                <input type='text' placeholder='&#x2315;  Search coming soon' />
            </form>
            <div className='options'>
                <div><img className='compass' src={require('../assets/icons/compass.png')} alt='broke' /></div>
                <div><img className='heart' src={require('../assets/icons/heart.png')} alt='broke' /></div>
                <div><img className='profile' src={require('../assets/icons/profile.png')} alt='broke' /></div>
            </div>
        </div>
    );
}
export default SearchBar;