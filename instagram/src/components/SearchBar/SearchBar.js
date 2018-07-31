import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
            isEmpty: true,
            onSearch: props.onSearch
        };
    }

    handleSearchChange = e => {
        var isEmpty = !(e.target.value !== '');
        this.setState({isEmpty: isEmpty});
    };

    render () {
        return (
            <div className="search-bar">
                    <i className="fab fa-instagram fa-2x"></i>
                <form onSubmit={this.state.onSearch}>
                    {this.state.isEmpty ?  <i className="fas fa-search"></i> : <p>&emsp;</p>}
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