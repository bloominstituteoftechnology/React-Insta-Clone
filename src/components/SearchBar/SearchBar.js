import React from 'react';

import styles from "./SearchBar.css";
import styled from 'styled-components';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import instagram from "@fortawesome/fontawesome-free-brands/faInstagram";


{/* <FontAwesomeIcon icon="search"/> */}

const Header=styled.nav`
display:flex;
justify-content:space-around;
font-size:3rem;
width: 65%;
margin: auto;
padding-top:10px;
padding-bottom:10px;
`

const Insta=styled.div`
font-family: 'Grand Hotel', cursive
`

const ThreeNav=styled.div`
display:flex;
justify-content:space-between;
`
const Inputty=styled.input`
font-size: 1rem;
text-align: center;
font-weight: 100;
height: 100%;
margin-top: auto;
margin-bottom: auto;
margin-left: auto;
margin-right: auto;
`

class SearchBar extends React.Component{
    constructor(){
        super();
        this.state={

        }
    };


    render(){
        return(
            <Header>
                <Insta>
                <FontAwesomeIcon icon={instagram} />
                
                &ensp;|&ensp;
                  Instagram
                </Insta>
                <form onSubmit={this.props.onSearch}>
                <input value={this.props.SBval} onChange={this.props.onChange}id="inputty" type="text" placeholder="&#x1f50d; search"/>
                </form>
                <ThreeNav>
                
                <FontAwesomeIcon icon="compass"/>
                &ensp;
                <FontAwesomeIcon icon="heart"/>
                &ensp;
                <FontAwesomeIcon icon="user"/>
                &ensp;
                </ThreeNav>
            </Header>

        )
    }

}

export default SearchBar;