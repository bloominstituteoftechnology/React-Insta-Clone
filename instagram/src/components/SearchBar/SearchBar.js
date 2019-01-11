import React from 'react';
import logo from './logo.png';
import './Search.css';

import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 14px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  border-left: none;
  border: 1px solid black;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  padding: 0px;
`
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
                        <Button type="submit">
                            <i className="fa fa-search"></i>
                        </Button>
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