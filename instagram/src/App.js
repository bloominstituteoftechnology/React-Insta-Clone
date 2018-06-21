import React from "react";
import Login from './components/Login/Login';
import styled from 'styled-components';

// import "./App.css";

// styled-components
const AppContainer = styled.div`

`;

const NewLogin = Login();

// Invoke login
function App() {
    return (
        <AppContainer>
            <NewLogin />
        </AppContainer>
    );
}

export default App;