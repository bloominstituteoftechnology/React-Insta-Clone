import React from 'react';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
    }

    searchChangeHandler = (event) => {
        event.preventDefault();
        this.setState({ searchValue: event.target.value });
    }

    render() {
        return (
            <form onSubmit={(event) => this.props.submitSearch(event, this.state.searchValue)}>
                <input
                    type="text"
                    placeholder="Search"
                    value={this.state.searchValue}
                    onChange={this.searchChangeHandler}
                ></input>
            </form>
        );
    }
}

export default SearchInput;