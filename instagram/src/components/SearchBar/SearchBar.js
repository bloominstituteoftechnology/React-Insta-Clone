import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    state = { text: "" };

    handleChange = event => {
        this.setState({
            text: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.search(this.state.text);
        this.setState({ text: "" });
    };

    render() {
        return (
            <div className="search-bar">
                <div className="company">
                    <i className="fab fa-instagram"></i><h1>Instagram</h1>
                </div>
                <form className="search" onSubmit={this.handleSubmit}>
                    <input 
                        placeholder="&#8981;&nbsp;Search" 
                        value={this.state.text} 
                        onChange={this.handleChange}
                    />
                </form>
                <div className="links">
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user"></i>
                </div>
            </div>
        )
    }
}

export default SearchBar;