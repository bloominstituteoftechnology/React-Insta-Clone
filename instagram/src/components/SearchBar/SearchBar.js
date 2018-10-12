import React from 'react';
import {StyledHeader, StyledCompany, StyledCompanyLogo, StyledCompanyName, StyledSearchForm,
StyledSearchInput, StyledLinks } from '../../reusables/Styles';

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