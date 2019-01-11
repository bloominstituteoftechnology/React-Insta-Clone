import React from 'react';
import logo from './logo.png';
import './Search.css';

import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    height: 100px;
    align-items: center;
`
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
const LogoHeader = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: flex-start;
    width: 33%;
`

const LogoImage = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    align-self: center;
    background-image: url(${logo});
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
                <Header>
                    <LogoHeader>
                        <a href="/">
                            <LogoImage src={logo} alt="insta-logo">
                            </LogoImage>
                        </a>
                        <h3>Instagram</h3>
                    </LogoHeader>
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
                </Header>
            </div>
        )
    };
}

export default SearchBar;