import React from "react";
import '../SearchBar/search.css';
 class SearchBar extends React.Component {
  render() {
    return (
        <div className={'searchContainer'}>
            <div className={'searchBox'}>
                <div className={'logoBox'}>
                    <img src="https://png.icons8.com/windows/48/000000/instagram-new.png" />
                    <div className={'searchBarBreak'}>|</div>
                    <div className={'logoTitle'}>Instagram</div>
                </div>
                <form>
                    <input className={'search'} placeholder={'search'} />
                </form>
                <div className={'topButtonBox'}>
                    <img src="https://png.icons8.com/ios/48/000000/compass.png" />
                    <img src="https://png.icons8.com/ios/48/000000/hearts.png" />
                    <img src="https://png.icons8.com/ios/48/000000/gender-neutral-user.png" />
                </div>
            </div>
        </div>
      
    );
  }
}
 export default SearchBar;