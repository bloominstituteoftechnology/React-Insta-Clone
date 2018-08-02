import React from 'react';
import './SearchBar.css';
import {Row, Input, Form} from 'reactstrap';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid lightgray;
    padding: 2rem;
`;

const Title = styled.div`
    font-family: 'Cedarville Cursive', cursive;
    font-size: 2rem;
    font-weight: bold;
`;

const Search = props => {
    return (
        <Header>
            <Title><i className="fa fa-instagram search-icons" aria-hidden="true"> |</i> Instagram</Title>
            <Form onSubmit={props.result} className='search'><span className="fa fa-search"></span>
                    <Input placeholder='Search' onChange={props.searchUser}></Input>
            </Form>
            <Row className='search-icons'>
                <i className="fa fa-compass search-icons" aria-hidden="true"></i>
                <i className="fa fa-heart-o search-icons" aria-hidden="true"></i>
                <i className="fa fa-user-o search-icons" aria-hidden="true"></i>
            </Row>
        </Header>
    )
}

export default Search;