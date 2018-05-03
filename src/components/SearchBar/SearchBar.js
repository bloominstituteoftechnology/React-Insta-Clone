import React, { Component } from 'react';

export default class SearchBar extends Component {

    submit = () => {
        const user = this.input.value;
        this.setState(this.props.search(user));
    }

   

    render() {
        return (
        <div class="search-bar">
            <input class="search-field"
            type="text"
            ref={input => this.input = input}
            placeholder="Search"/>
            <button onClick={this.submit}>Search</button>
        </div>
        );
    }
}