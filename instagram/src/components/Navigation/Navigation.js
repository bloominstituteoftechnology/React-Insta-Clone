import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../img/1024px-Instagram_logo.svg.png';
import { InstagramLogos, InstagramLogoText, HeaderIcons } from './StyledNavigation';
import PropTypes from 'prop-types';

const Navigation = props => {
    return(
        <React.Fragment>
            <InstagramLogos>
                <i className="fab fa-instagram"></i>
                <p>|</p>
                <InstagramLogoText src={logo} alt="Instagram"/>
            </InstagramLogos>
            <SearchBar 
                handlesChanges={props.handlesChanges} 
                searchText={props.searchText}
                isSelected={props.isSelected}
                hasBeenClicked={props.hasBeenClicked}
                clearSearchText={props.clearSearchText}
            />
            <HeaderIcons>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user" onClick={props.logOut}></i>
            </HeaderIcons>
        </React.Fragment>
    );
}

Navigation.propTypes = {
    handlesChanges: PropTypes.func,
}

export default Navigation;