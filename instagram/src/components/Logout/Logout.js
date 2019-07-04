import React from 'react';
import {Button} from '../Styled-components/Styled-components.js'



const Logout =  (props) => {
    console.log("Logout " ,props.status);
    return (
        <div>
            <Button type = 'logout' onClick = {props.status}>Logout</Button>         
        </div>
    ) 
}

export default Logout;