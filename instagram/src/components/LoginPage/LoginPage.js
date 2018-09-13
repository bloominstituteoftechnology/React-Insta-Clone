import React from 'react';

function LoginPage(props) {
    return (
        <div className="LoginPageDiv">
            <form>
                <input type="text" placeholder=" Username..." />
                <input type="text" placeholder=" Password..." />
            </form>
        </div>
    )
}

export default LoginPage;