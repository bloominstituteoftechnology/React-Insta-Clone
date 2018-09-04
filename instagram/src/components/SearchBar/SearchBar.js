import React, { Component } from 'react';
import styled from 'styled-components';


const SearchBarHeader = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 20px;
        border-bottom: 2px solid lightgray;
        top: 0;
        flex-wrap: wrap;

        > img {
            max-width: 375px;
            width: 100%;
            margin-top: 10px;
        }

        > input {
            max-width: 430px;
            width: 100%;
            margin-top: 10px;
            height: 55px;
            border: 2px solid lightgray;
            border-radius: 5px;
            text-align: center;
            font-size: 3.2rem;
        }
    `
const Icons = styled.div`
    
    display: flex;
    justify-content: space-between;
    width: 270px;
    margin-top: 10px;
       
`



class SearchBar extends Component {
    
    render() { 
        return ( 
            <SearchBarHeader>
                <img src="https://www.juut.com/wp-content/uploads/2016/02/instagram.png" alt="logo" />
                <input 
                    type="text"
                    placeholder="Search"
                    value={this.props.value}
                    onChange={this.props.handleSearch}
                />
            <Icons>
                <div><i className="far fa-compass fa-5x"></i></div>
                <div><i className="far fa-heart fa-5x"></i></div>
                <div><i className="far fa-user fa-5x"></i></div>
            </Icons>    
            </SearchBarHeader>
         );
    }
}
 
export default SearchBar;