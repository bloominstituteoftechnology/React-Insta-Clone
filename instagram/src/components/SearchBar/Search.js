import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import Logo from '../../instagram.png';

const SearchBar = props => {
    return (
        <Container>
            <Row className="SearchBar">
                <Col xs="5" className="d-flex align-items-center">
                    <a href=".SearchBar"><i className="fab fa-instagram fa-2x col-3"></i></a>
                    <a href=".SearchBar"><img className='logo' src={Logo} alt="Instagram Logo" /></a>
                </Col>
                <Col xs="5" className="d-flex align-items-center">
                    <input type="text" placeholder="&#xf002; Search" className="fa-search" />
                </Col>
                <Col xs="2" className="d-flex justify-content-between align-items-center">
                    <a href=".SearchBar"><i className="far fa-compass fa-lg"></i></a>
                    <a href=".SearchBar"><i className="far fa-heart fa-lg"></i></a>
                    <a href=".SearchBar"><i className="far fa-user fa-lg"></i></a>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar