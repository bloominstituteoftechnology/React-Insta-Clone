import React from 'react';
import './SearchBar.css'

function SearchBar(props) {
    return (
        <div className='searchBar'>
            <div>
                <img className='searchBarImg cameraLogo' src='https://cdn4.iconfinder.com/data/icons/photography-vol-1/48/39-512.png' alt='camera' />
                <img className='searchBarImg instagramLogo' src='data:image/png;base64,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' alt='camera' />
            </div>
            <input placeholder='Search' />
            <div>
                <img className='searchBarImg compass' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2Z3aY9nsP0Sgnf527jjm5d1k2gKYvTNmEHcqPSmTRiHcF3eM' alt='compass'/>
                <img className='searchBarImg heart' src='data:image/png;base64,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' alt='heart' />
                <img className='searchBarImg person' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxTVoD-Xn2H86G_s9xkG6v8ZBmvuO0_BN-mcXB6iANg5X2H-VIw' alt='person' />
            </div>
        </div>
    )
}

export default SearchBar;