import React from 'react';
import logo from './logo.png';
import './Search.css';

import '../../../node_modules/font-awesome/css/font-awesome.min.css';


class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    changeHandler = event => {
        this.setState({term: event.target.value});
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.searchTerm(this.state.term);
        this.setState({term: ''})
    }

    render() {

        return(
            <div className="searchbar-wrapper">
                
                <div className="navs img-logo">
                    <a href="/"><img src={logo} alt="insta-logo" /></a>
                    <h3>Instagram</h3>
                </div>
                
                <div className="navs search">

                    <form onSubmit={this.submitHandler}>
                        <input 
                            type="text" 
                            placeholder="Search"
                            value={this.state.term}
                            onChange={this.changeHandler}
                        />
                        <button type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
                
                <div className="navs icons">
                    <div className="icons">
                        <i className="fa fa-compass"></i>
                    </div>
                    <div className="icons">
                        <i className="fa fa-heart-o"></i>
                    </div>
                    <div className="icons">
                        <i className="fa fa-user-o"></i>
                    </div>
                </div>
            
            </div>
        )
    };
}

export default SearchBar;