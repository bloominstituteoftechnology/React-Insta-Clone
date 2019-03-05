import React from 'react';
import Camera from '../../photos/camera-logo.svg';
import Instagram from '../../photos/iglogo.png';
import Compass from '../../photos/Compass-Symbol.png';
import Heart from '../../photos/heart.svg';
import User from '../../photos/user-icon.png';
import './SearchBar.css';
import styled from 'styled-components';


const searchStyle = styled.div `
border-bottom: 1px solid #3333;
  height: 80px;
  line-height: 70px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;`;


const SearchBar = props => {
        return (
            <searchStyle >
                <div className='' >
                    <img alt="cam-logo" src= {Camera} className="logo"/>
                    <img alt="inst-logo" src= {Instagram} className="logo" />
                </div>
                <div>
                    <input type="text" placeholder="search" />
                </div>
                <div>
                   <img alt='compass' src= {Compass} className="logo" />
                   <img alt='heart' src= {Heart} className="logo" />
                   <img alt='user icon' src= {User} className="logo" />
                </div>
            </searchStyle>
        );
}

export default SearchBar;