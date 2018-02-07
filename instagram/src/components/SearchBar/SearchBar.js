import React, { Component } from 'react';

class SearchBar extends Component {

    submitFilter = (event) => {
        const criterion = this.input.value;
        this.props.filterPosts(criterion);
    }

    render() {
        return (
            <div className='SearchBar'>
                <input className='SearchBar-field' type='text' onChage={this.submitFilter} ref={input => this.input = input} placeholder='Search'></input>
            </div>
        );
    }
};

export default SearchBar;