import React from 'react';
import './searchBar.scss';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: false
        }
    }

    render() {
        return (
            <>
                <button
                    className='search'
                    style={{ display: this.state.search === false ? 'flex' : 'none' }}
                    onClick={() => this.setState({ search: !this.state.search })}
                >
                    <i className='fas fa-search' />
                    <i>Search</i>
                </button>
                <input
                    placeholder='Search'
                    name='searchValue'
                    value={this.props.searchValue}
                    style={{ display: this.state.search === true ? 'flex' : 'none' }}
                    onChange={this.props.search}
                />
            </>
        )
    }
}

export default SearchBar;