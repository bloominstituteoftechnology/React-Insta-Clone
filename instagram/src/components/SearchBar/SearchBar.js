import React, { Component } from 'react';
import './SearchBar.css';
import logo from './insta-logo.png'
import styled from 'styled-components'

// styled search bar components

const SearchBarContainer = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 20px 2%;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #E6E6E6;
    position: fixed;
    top: 0;
    background-color: white;
`

const Corner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 160px;
`

const RightCorner = styled(Corner)`
    align-items: center;
`

const SearchBarLogo = styled.img`
    height: 35px;
`

const VerticalLine = styled.div`
    width: 1px; 
    background-color: black; 
    height: 100%; 
    height: 30px;
`

const SearchBarInput = styled.input`
    height: 25px;
    width: 200px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #E6E6E6;
    background-color: #FAFAFA;
    outline-width: 0;
`

// search bar component

class SearchBar extends React.Component {
    render () {
        return (
            // upper left corner with instagram logos
            <SearchBarContainer>
                <Corner>
                    <i className='fab fa-instagram fa-2x'></i>
                    <VerticalLine/>
                    <a href='#'>
                        <SearchBarLogo 
                            src={logo} 
                            alt='Instagram logo' 
                        /> 
                    </a>
                </Corner>
                {/* search bar */}
                <form onSubmit={this.props.onSubmit}>
                    <SearchBarInput 
                        type='text' 
                        placeholder='Search'
                        value={this.props.value}
                        onChange={this.props.onChange}
                    />
                </form>
                {/* upper right corner with compass, heart, user icons */}
                <RightCorner>
                    <i className="far fa-compass fa-2x"></i>
                    <i className="far fa-heart fa-2x"></i>
                    <i className="far fa-user fa-2x"></i>
                </RightCorner>
            </SearchBarContainer>
        )
    }
}

export default SearchBar;