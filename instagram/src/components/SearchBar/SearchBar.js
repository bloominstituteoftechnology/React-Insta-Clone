import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import './SearchBar.sass';

const SearchBar = props => {
    return (
        <Container>
            <Row>
                <Col xs="4">
                    <h1>Logo placeholder</h1>
                </Col>
                <Col xs="4">
                    <Input type="text" name="search" id="search" placeholder="Search" />
                </Col>
                <Col xs="4">
                    <h1>Profile icons</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default SearchBar;
