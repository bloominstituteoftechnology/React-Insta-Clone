import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            searchText: ''
        }
    }
    render() {
        return (
            <div className="search">
                <div className="logo-container">
                    <img src="img/logo.png" alt="logo" />
                    <img src="img/wordmark.png" alt="Instagram" />
                </div>
                <form onSubmit={this.submit}>
                    <input
                        type="text"
                        onChange={this.typeValue}
                        value={this.state.searchText}
                    />
                </form>
                <div className="profile-container">
                    <img src="img/compass.png" alt="compass" />
                    <img src="img/heart.png" alt="heart" />
                    <img src="img/person.png" alt="person" />
                </div>
            </div>
        )
    }
    //--------------------------------------------
    typeValue = (changeEvent) => {
        let newValue = changeEvent.target.value;
        this.setState({
            searchText: newValue
        });
    }
    submit = submitEvent => {
        submitEvent.preventDefault();
        this.props.onSubmit(this.state.searchText);
        this.setState({
            searchText: ''
        });
    }
}

export default SearchBar;
