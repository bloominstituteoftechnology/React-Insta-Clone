import { Component } from 'react';
import React from 'react';
import './SearchBar.css'
import logo from './Logo.svg';

const SearchBar = props => {
    return (
        <div className="nandobar d-flex">
            <div className="asdf">
                <i className="fab fa-instagram fa-3x"></i>
                <span className="border-left"></span>
                <img className="logo" src={logo} />
            </div>
            <div>
                <form onSubmit={props.filter}>
                    <input
                        className="search-bar rounded"
                        name="search" // should be known as the state.value of the thing we update
                        onChange={props.handle}
                        value={props.search} // should be bound to the state.value of thing we update
                        placeHolder="Search"
                    />
                </form>
            </div>
            <div>
                <i class="far fa-compass"></i>
                <i class="far fa-heart"></i>
                <i class="far fa-user"></i>
            </div>
        </div>
    );
}

// class SearchBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//     componentDidMount() {
//         let newProps = this.props.xor;
//         this.setState({ data: newProps, search: '' })
//     }
//     handleNewItem = event => {
//         this.setState({ [event.target.name]: event.target.value })
//     }

//     filterPosts = (e) => {
//         e.preventDefault();
//         let query = this.state.search;
//         let postArray = [...this.state.data];

//         postArray = postArray.filter(element => element.username.includes(query));
//         console.log("post", postArray)
//         this.setState({ filterData: postArray })
//     }


//     }
// }

export default SearchBar;