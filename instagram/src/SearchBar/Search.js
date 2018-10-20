
import React from 'react';
import styled from 'styled-components';

const Searchstyle = styled.div`
    width: 40%;
`;

class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }

    handleInput = (event) => {
        const {value} = event.target;
        this.setState({
            input: value
        })
    }

    preventDefault = (event) => {
        event.preventDefault();
    }

    render(){
        return (
            <Searchstyle>
                <form onSubmit={this.preventDefault}>
                    <input onChange={this.handleInput} type='text' placeholder='&#x1F50D; Search'>
                    </input>
                </form>
            </Searchstyle>
        )
    }
};


export default Search;

//need to overlay the icon in search bar if want icon, and make disappear on input