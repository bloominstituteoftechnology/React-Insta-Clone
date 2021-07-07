import React, {Component} from "react"
import "./SearchBar.css"
import instacamera from "../images/instaIMG/instacamera.png"
import logo from "../images/instaIMG/insta.png"
import compass from "../images/instaIMG/compass.png"
import heart from "../images/instaIMG/heart.png"
import user from "../images/instaIMG/user.png"

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: ""
        }
    }

    handleChanges = (e) => {
        this.setState({ searchText: e.target.value })
    }

    searchSubmitted = (e) => {
        e.preventDefault()
        this.props.searchUpdated(this.state.searchText)
    }

    render() {
        return (
            <div className="searchBar">
            <div className="searchBarLeft">
                <img className="camera" alt="Digital" src={instacamera} />
                <img className="instagramLogo" alt="Logo" src={logo} />
            </div>
            <div className="searchBarform">
                <form onSubmit={this.searchSubmitted}>
                    <input  
                        className="inputSearch"
                        type="text"
                        placeholder="Search"
                        onChange={this.handleChanges}
                        value={this.state.searchText}
                        />
                        </form>
                    </div>
                    <div className="searchBarRight">
                    <img className="compass" alt="compass" src={compass} />
                    <img className="heartSearch" alt="heart" src={heart} />
                    <img className="profileSearch" alt="profile" src={user} />
                    </div>
                </div>
        )
    }
}

export default SearchBar;