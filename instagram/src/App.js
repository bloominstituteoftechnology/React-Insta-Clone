import React from "react";
import Login from './components/Login/Login';

import "./App.css";

const NewLogin = Login();

// Invoke login
function App() {
    return (
        <div className="App">
            <NewLogin />
        </div>
    );
}

export default App;