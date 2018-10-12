import React, { Component } from 'react';
import logo from './logo.svg';
import PostPage from './components/PostContainer/PostPage';
import Authenticate from './components/Authentication/Authenticate';
import styled from 'styled-components';

const AppContainer = styled.div`
    background: white;
`

class App extends Component {
    constructor() {
        super();
        this.state = {}
    };

    render() {
        return (
            <AppContainer className="App">
                <PostPage onLogout={this.props.onLogout}/>
            </AppContainer>    
        )
    }
}

export default Authenticate(App);
