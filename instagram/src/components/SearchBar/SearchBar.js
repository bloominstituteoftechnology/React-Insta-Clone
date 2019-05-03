import React from 'react';
import { Button } from "reactstrap";
import { Input } from '../styles/input'

import "bootstrap/dist/css/bootstrap.min.css";

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
                <Button
                    className='search'
                    style={{ display: this.state.search === false ? 'flex' : 'none' }}
                    onClick={() => this.setState({ search: !this.state.search })}
                >
                    <i className='fas fa-search' />
                    <i className='searchText'>Search</i>
                </Button>
                <Input
                    ref={input => input && input.focus()}
                    placeholder='Search'
                    name='searchValue'
                    type='search'
                    value={this.props.searchValue}
                    style={{ display: this.state.search === true ? 'flex' : 'none' }}
                    onChange={this.props.search}
                />
            </>
        )
    }
}

export default SearchBar;