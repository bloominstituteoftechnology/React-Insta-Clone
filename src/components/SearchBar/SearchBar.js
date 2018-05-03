import React, { Component } from 'react';
import './SearchBar.css'
import logo from './Logo.svg';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = this.props;
    }
    // componentDidMount() {
    //     let newProps = this.props;
    //     // this.setState({ search: '' })
    // }

    filterPosts = () => {
        let query = this.state.search;
        let postArray = [...this.state.data];

        postArray = postArray.filter(element => element.username.includes(query));
        this.setState({ data: { postArray } })
    }

    render() {
        console.log("STATE", this.state)
        return (
            <div className="nandobar d-flex">
                <div className="asdf">
                    <i className="fab fa-instagram fa-3x"></i>
                    <span className="border-left"></span>
                    <img className="logo" src={logo} />
                </div>
                <div>
                    <input
                        className="search-bar rounded"
                        name="comment" // should be known as the state.value of the thing we update
                        onChange={this.filterPosts}
                        value={this.state.search} // should be bound to the state.value of thing we update
                        placeHolder="Search"
                    />
                </div>
                <div>
                    <i class="far fa-compass"></i>
                    <i class="far fa-heart"></i>
                    <i class="far fa-user"></i>
                </div>
            </div>
        );
    }
}

export default SearchBar;