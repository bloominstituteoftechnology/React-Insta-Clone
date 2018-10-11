import React from 'react';
import { Header, LogoHeader, Separator, InstagramLogo, Inputs} from '../../Styles';

const SearchBar = (props) => {
    return(
        <Header>
            <LogoHeader>
                <i class="fab fa-instagram fa-2x"></i>
                <Separator></Separator>
                <InstagramLogo>instagram</InstagramLogo>
            </LogoHeader>

            <Inputs searchInput type="text" placeholder="Search" onKeyDown={props.searchPosts}/>

            <div>
                <i class="far fa-compass fa-2x"></i>
                <i class="far fa-heart fa-2x"></i>
                <i class="far fa-user fa-2x"></i>
            </div>
        </Header>
    );
}
export default SearchBar;