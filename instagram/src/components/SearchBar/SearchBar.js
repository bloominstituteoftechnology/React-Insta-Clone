import React from 'react';
import styled from 'styled-components';


const StyledHeader = styled.div`
    width: 100%;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledCompany = styled.div`
    margin-left: 1.5%;
    font-size: 4.6rem;
    display: flex;
    align-items: center;
`;

const StyledCompanyLogo = styled.i`
    font-size: 4.8rem;
`;

const StyledCompanyName = styled.h1`
    font-family: 'Grand Hotel', cursive;
    border-left: 1px solid black;
    margin-left: 14%;
    padding-left: 10%;
`;

const StyledSearchForm = styled.form` 
    width: 25%;
`;

const StyledSearchInput = styled.input`
    width: 88%;
    text-align: center;
    background: #fafafa;
    color: #999999;
    font-size: 2rem;
    line-height: 3.2rem;
    border: 1px solid #cccccc;
    border-radius: 5px;
`;

const StyledLinks = styled.div`
    font-size: 3rem;
    margin-right: 3.5%;
    width: 13%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    color: #999999;
`;


class SearchBar extends React.Component {

    state = { text: "" };

    handleChange = event => {
        this.setState({
            text: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.search(this.state.text);
        this.setState({ text: "" });
    };

    render() {
        return (
            <StyledHeader>
                <StyledCompany>
                    <StyledCompanyLogo className="fab fa-instagram"></StyledCompanyLogo>
                    <StyledCompanyName>Instagram</StyledCompanyName>
                </StyledCompany>
                <StyledSearchForm onSubmit={this.handleSubmit}>
                    <StyledSearchInput 
                        placeholder="&#8981;&nbsp;Search" 
                        value={this.state.text} 
                        onChange={this.handleChange}
                    />
                </StyledSearchForm>
                <StyledLinks>
                    <i className="far fa-compass"></i>
                    <i className="far fa-heart"></i>
                    <i className="far fa-user"></i>
                </StyledLinks>
            </StyledHeader>
        )
    }
}

export default SearchBar;