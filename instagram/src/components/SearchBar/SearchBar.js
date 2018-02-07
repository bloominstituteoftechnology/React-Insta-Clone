import React from "react";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div><input type="text" className="search-bar" placeholder="&#128269; Search" /> </div>
        );
    }
}


export default SearchBar;