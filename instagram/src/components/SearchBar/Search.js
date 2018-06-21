import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import Logo from '../../instagram.png';
import styled from 'styled-components';

const StyledLink = styled.a`
    color: black !important;
`

const StyledImg = styled.img`
    height: 40px;
`
const StyledInput = styled.input`
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 14px;
`

const SearchBar = props => {
    return (
        <Container>
            <Row className="SearchBar">
                <Col xs="5" className="d-flex align-items-center">
                    <StyledLink href=".SearchBar"><i className="fab fa-instagram fa-2x col-3"></i></StyledLink>
                    <StyledLink href=".SearchBar"><StyledImg src={Logo} alt="Instagram Logo" /></StyledLink>
                </Col>
                <Col xs="5" className="d-flex align-items-center">
                    <StyledInput type="text" placeholder="&#xf002; Search" className="fa-search" onChange={(e)=> props.onChange(e)} value={props.value}/>
                </Col>
                <Col xs="2" className="d-flex justify-content-between align-items-center">
                    <StyledLink href=".SearchBar"><i className="far fa-compass fa-lg"></i></StyledLink>
                    <StyledLink href=".SearchBar"><i className="far fa-heart fa-lg"></i></StyledLink>
                    <StyledLink href=".SearchBar"><i className="far fa-user fa-lg"></i></StyledLink>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar