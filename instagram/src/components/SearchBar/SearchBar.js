import React from 'react';
import './SearchBar.css'
import Camera from '../../assets/Camera.jpg';
import instagram from '../../assets/instagram.png';
import compass from '../../assets/compass.png';
import heart from '../../assets/heart.png';
import person from '../../assets/person.png';
import styled from 'styled-components';

const SbContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px auto;
    border-bottom: 1px solid lightgray;
`;

const SbLeft = styled.div`
    display: flex;
    align-items: center;
`;

const SbCamera = styled.img`
    width: 45px;
    border-right: 1px solid gray;
    padding-right: 20px;
    margin-right: 20px;
`;

const SbInsta = styled.img`
    width: 100px;
`;

const SbRight = styled.img`
    width: 45px;
    padding-right: 20px;
`;

const SearchBar = props => {
    return (
        <SbContainer>
            <SbLeft>
                <SbCamera src={Camera} alt="Camera" />
                <SbInsta src={instagram} alt="Instagram Word" />
            </SbLeft>
                <input 
                    onChange={props.searchInput} 
                    type="text" 
                    placeholder="Search"
                />
            <div>
                <SbRight src={compass} alt="Compass" />
                <SbRight src={heart} alt="Heart" />
                <SbRight src={person} alt="Person" />
            </div>
        </SbContainer>
    );
}

export default SearchBar;