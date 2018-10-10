import React from "react";
import '../SearchBar/SearchBar.css';

class SearchBar extends React.Component {
    logout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("loggedIn");
        window.location.reload();
    }
  render() {

    
    return (
        <div className={'searchContainer'}>
            <div className={'searchBox'}>
                <div className={'logoBox'}>
                    <img src="https://png.icons8.com/windows/48/000000/instagram-new.png" alt="" />
                    <div className={'searchBarBreak'}>|</div>
                    <div className={'logoTitle'}>Instagram</div>
                </div>
                <form>
                    <input className={'search'} placeholder={'Search'} onChange={this.props.searchFilter} />
                </form>
                <div className={'topButtonBox'}>
                    <img src="https://png.icons8.com/ios/48/000000/compass.png" alt="" />
                    <img src="https://png.icons8.com/ios/48/000000/hearts.png" alt="" />
                    <img src="https://png.icons8.com/ios/48/000000/gender-neutral-user.png" onClick={this.logout} alt="" />
                </div>
            </div>
        </div>
      
    );
  }
}

export default SearchBar;
