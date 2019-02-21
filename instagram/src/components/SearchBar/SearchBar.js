import React from 'react'
import './SearchBar.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import {faInstagram} from '@fortawesome/free-brands-svg-icons';

import {faHeart, faCompass, faUser} from '@fortawesome/free-solid-svg-icons';



const SearchBar = (props) => {
    return (
        <Container className='header'>
            <Row className='content'>
                <div className='branding'>
                    <FontAwesomeIcon icon={faInstagram} size='2x'/>
                    <span><em>INSTAGRAM</em></span>
                </div>
                <div>
                    <form onSubmit={props.filterPost}><input type='search' className='search-bar' placeholder='Search' onChange={props.filterPost}/></form>
                </div>
                <div className='controls'>
                    <FontAwesomeIcon icon={faCompass} size='2x' color='tan'/>
                    <FontAwesomeIcon icon={faHeart} size='2x' color='tan'/>
                    <FontAwesomeIcon icon={faUser} size='2x' color='tan'/>
                </div>
            </Row>
        </Container>
    )
}

export default SearchBar