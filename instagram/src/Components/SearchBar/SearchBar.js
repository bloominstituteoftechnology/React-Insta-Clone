import React from "react";


class SearchBar extends React.Component {
    constructor(){
        super();
        this.state = {
            searchValue: ''
        }
    }

    render(){
        return (
            <div className="searchbar-container">
                {/*Instagram Icon*/}
                <i className="fa fa-instagram"></i>
                {/*Instagram logo font: Billabong*/}
                <p className="instagram-letter-logo">Instagram</p>
                {/*Search bar*/}
                <input type="text" placeholder="f002; Search" className="search-input" onChange={this.inputHandler} value={this.state.searchValue}/>
                {/*3 icons on the right*/}
                <div className="rigth-icon-container">
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user"></i>
                </div>
            </div>
        )
    }
}

export default SearchBar;