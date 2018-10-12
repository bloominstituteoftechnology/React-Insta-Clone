import React from 'react';
import * as search from './searchComponents.js';

class SearchBar extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            searchText: ''
        }
    }
    render() {
        return (
            <search.Container>
                <search.LogoContainer>
                    <img src="img/logo.png" alt="logo" />
                    <img src="img/wordmark.png" alt="Instagram" />
                </search.LogoContainer>
                <form onSubmit={this.submit}>
                    <input
                        type="text"
                        onChange={this.typeValue}
                        value={this.state.searchText}
                    />
                </form>
                <div>
                    <search.ProfileContainerImg src="img/compass.png" alt="compass" />
                    <search.ProfileContainerImg src="img/person.png" alt="person" />
                    <search.ProfileContainerImg src="img/heart.png" alt="heart" />
                </div>
            </search.Container>
        )
    }
    
    //--------------------------------------------
    typeValue = (changeEvent) => {
        let newValue = changeEvent.target.value;
        this.setState({
            searchText: newValue
        });
    }
    submit = submitEvent => {
        submitEvent.preventDefault();
        this.props.onSubmit(this.state.searchText);
        this.setState({
            searchText: ''
        });
    }
}

export default SearchBar;
