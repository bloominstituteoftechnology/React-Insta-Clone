import React from 'react';
import { TheSearchBar,
  InstaLogoBlock,
  SearchInput,
  SearchIcons,
  SearchIcon
} from '../Reusables/Reusables'

import '../../images.css'

const SearchBar = props => {
        return (
           <TheSearchBar>
              <InstaLogoBlock>
                 <img className="InstaLogo" src="http://www.freelogovectors.net/wp-content/uploads/2016/12/instagram-logo1-375x375.png" alt="insta logo"/>
                 <img className="InstaName" src="http://www.freelogovectors.net/wp-content/uploads/2016/12/InstagramLogo-768x217.png" alt="insta name"/>
              </InstaLogoBlock>
              <SearchInput>
                <input
                  type= "text"
                  placeholder="Search"
                  onKeyDown={props.inputSearch}
                /> 
              </SearchInput>
              <SearchIcons>
                <SearchIcon><i class="far fa-compass"></i></SearchIcon>
                <SearchIcon><i class="far fa-heart Search-icon"></i></SearchIcon>  
                <SearchIcon><i class="far fa-user Search-icon"></i></SearchIcon>
              </SearchIcons>
            </TheSearchBar>
       );
    }   

export default SearchBar