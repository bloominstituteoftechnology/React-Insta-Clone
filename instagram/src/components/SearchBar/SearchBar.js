import React from "react";
import Button from '../Misc/Button.js';

const SearchBar = props => {
    console.log("Props", props);
    return (
        <div>
            <input type="text" name="name" />
            <Button
                ButtonProp='explore-button'
                handleButtonClick={ props.buttonClick }
                ButtonContent='Explore'
            />
            <Button
                ButtonProp='like-button'
                handleButtonClick={ () => alert('Your likes') }
                ButtonContent='Like'
            />
            <Button
                ButtonProp='profile-button'
                handleButtonClick={ () => alert('Look at your sweet profile') }
                ButtonContent='Profile'
            />
        </div>
    );

}





export default SearchBar;