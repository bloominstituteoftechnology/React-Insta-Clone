import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
    padding: 5px 50px;
    text-align: center;
    border: 1px solid #D6D6D6;
    border-radius: 5px;
    font-size: 1.6rem;
    background: #F9F9F9;
    color: black;

    ::placeholder {
        color: #8E8E8E;
        font-size: 1.6rem;
    }
`;

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
    }

    searchChangeHandler = (event) => {
        event.preventDefault();
        this.setState({ searchValue: event.target.value });
    }

    render() {
        return (
            <form onSubmit={(event) => this.props.submitSearch(event, this.state.searchValue)}>
                <InputField
                    type="text"
                    placeholder="🔍 Search"
                    value={this.state.searchValue}
                    onChange={this.searchChangeHandler}
                ></InputField>
            </form>
        );
    }
}

export default SearchInput;