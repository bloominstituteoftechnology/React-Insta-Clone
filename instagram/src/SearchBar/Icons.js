
import React from 'react';
import styled from 'styled-components';

const Iconstyle = styled.div`
    display: flex;
    justify-content: space-around;
    width: 20%;
    color: lightgray;
`;

const IconStyling = styled.i`
    color: lightgray;
    font-size: 24px;

    &:hover {
        color: darkgray;
    }
`;

class Icons extends React.Component {
    constructor(){
        super();
        this.state={}
    }

    logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    }

    render(){
        return (
            <Iconstyle>

                <a href='#'><IconStyling className="far fa-compass"></IconStyling></a>    

                <a href='#'><IconStyling className="far fa-heart"></IconStyling></a>

                <a href='#'><IconStyling className="far fa-user"></IconStyling></a>

                <a href='#' onClick={this.logout} ><IconStyling className="fas fa-sign-out-alt"></IconStyling></a>
            </Iconstyle>
        )
    }
};


export default Icons;