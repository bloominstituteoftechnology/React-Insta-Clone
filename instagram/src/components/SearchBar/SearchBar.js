import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component{
    render() {
        return (
            <div className="search-bar">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREUEQYYm040djuupemzsy6a3KaFjoftG8FPER8zvZJAZJtKh52fw" />
                Welcome to Shitty Instagram
                <form>
                    <input type="text" placeholder="search shitty instagram" />
                    <button type="submit">search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar