import React from 'react';
import './SearchBar.css';
import styled from 'styled-components';

const Header = styled.header`
    height: 40px;
    padding: 15px;
    width: 400px;
`
const HeaderImg = styled.img`
    height: 30px;
    width: auto;
`

function SearchBar(props) {
    return (
        <Header>
            <div className='searchBar'>
                <div>
                    <HeaderImg className='searchBarImg cameraLogo' src='https://cdn4.iconfinder.com/data/icons/photography-vol-1/48/39-512.png' alt='camera' />
                    <HeaderImg className='searchBarImg instagramLogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTVq7jiVqwNeYT-OOYEh4UfGbg588eDw8XcjzjbSRwqQCvdlEWQ' alt='camera' />
                </div>
                <form onSubmit={props.search}> 
                    <input onChange={props.searchBarHandler} value={props.searchText} placeholder='Search' />
                </form>
                <div>
                    <HeaderImg className='searchBarImg compass' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2Z3aY9nsP0Sgnf527jjm5d1k2gKYvTNmEHcqPSmTRiHcF3eM' alt='compass'/>
                    <HeaderImg className='searchBarImg heart' src='https://openclipart.org/image/2400px/svg_to_png/234835/heart-outline.png' alt='heart' />
                    <HeaderImg className='searchBarImg person' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxTVoD-Xn2H86G_s9xkG6v8ZBmvuO0_BN-mcXB6iANg5X2H-VIw' alt='person' />
                </div>
            </div>
        </Header>
    )
}

export default SearchBar;