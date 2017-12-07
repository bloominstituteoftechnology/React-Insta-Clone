import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: 'Search',
            submitTerm: '',
            update: '',
        }
    }
    handleSearch = (evt) => {
        this.setState({searchTerm: evt.target.value})
    }

    handleReturn = (evt) => {
        if(evt.keyCode === 13) { // When enter is pressed do this
            console.log('Submitting: ', this.state.searchTerm)
            let searchTerm = this.state.searchTerm;
            this.setState({submitTerm: searchTerm, searchTerm: ''})
        } else if (this.state.searchTerm === 'Search') { // When it is clicked do this
            this.setState({searchTerm: ''});
        } else {
            console.log(this.state.searchTerm); // Report curent entry
        }
    }

    render() {
        return (
            <div className="Nav">
                <div className="Nav__Item">
                    <img className="HomeIcon" src="./assets/igicon.jpg" alt="IG Logo Icon"/>
                    <div className="VerticalLine">|</div>
                    <div>
                        <img className="HomeLogo" src="./assets/ig.jpg" alt="IG Text Logo"/>
                    </div>
                </div>
                <div className="Nav__Item">
                        <input onKeyDown={this.handleReturn} onChange={this.handleSearch} onClick={this.handleReturn} className="Search" type="text" value={this.state.searchTerm}/>
                </div>
                <div className="Nav__Item">
                    <div className="Right__Nav">Discover</div>
                    <div className="Right__Nav">Like</div>
                    <div className="Right__Nav">Profile</div>
                </div>
            </div>
        );
    }
}

export default SearchBar;