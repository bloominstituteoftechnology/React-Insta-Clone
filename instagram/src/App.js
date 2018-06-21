import React from "react";
import Login from './components/Login/Login';
import {AppContainer} from './components/Styles/ReusableStyles';

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