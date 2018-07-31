import React from 'react';
import { Row, Col, Form, FormGroup, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import './SearchBar.css';



const SearchBar = () => {
    return (
        <Row>
            <Col className="flex-evenly">
                <FontAwesomeIcon icon={faInstagram} className="custom-icon"/>
                <img src={window.location.origin + '/instagramtext.png'} alt='Instagram logo' height='40px' />
                </Col>
            <Col>
                <Form>
                    <FormGroup >
                        <Input type="search"  className="fa fa-input" placeholder="&#xf002; Search" />
                    </FormGroup>
                </Form>
            </Col>
            <Col className="flex-evenly">
                <FontAwesomeIcon icon={faCompass} className="custom-icon" />
                <FontAwesomeIcon icon={faHeart} className="custom-icon" />
                <FontAwesomeIcon icon={faUser} className="custom-icon" />
            </Col>
        </Row>
    );
}



export default SearchBar;