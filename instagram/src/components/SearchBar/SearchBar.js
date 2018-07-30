import React from 'react';

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            current: '',
            isEmpty: false,
        };
    }

    onSearch = e => {
        e.preventDefault();
    };

    handleSearchChange = e => {
        var isEmpty = !(e.target.value !== '');
        this.setState({isEmpty: isEmpty});
    };

    render () {
        return (
            <div className="search-bar">
                    <i className="fab fa-instagram fa-2x"></i>
                <form>
                    <span className="{this.state.isEmpty ? null : 'd-none'}">
                        <i className="fas fa-search"></i>
                    </span>
                    <input 
                        className="search" 
                        onChange={this.handleSearchChange}
                        type="text" 
                        placeholder="              Search" />
                </form>
            </div>
        );
    }
};

export default SearchBar;