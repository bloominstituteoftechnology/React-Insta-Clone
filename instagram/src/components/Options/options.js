import React from 'react';
import '../assets/css/options.css';

export default ({close}) => (
    <div className="options">
        <ul className="menu">
            <li><button>Go to post</button></li>
            <li><button>Report inappropriate</button></li>
            <li><button onClick={close}>Cancel</button></li>            
        </ul>
    </div>
)