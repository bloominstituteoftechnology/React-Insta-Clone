import React from 'react';
import './SearchBar.css';
// import dummyData from '/Users/lambda_school_loaner_25/Documents/Lambda/week6/instagram/src/dummy-data.js';
// import Fuse from "fuse.js";

// const options = {
//     shouldSort: true,
//     tokenize: true,
//     findAllMatches: true,
//     includeMatches: true,
//     threshold: 0.6,
//     location: 0,
//     distance: 100,
//     maxPatternLength: 32,
//     minMatchCharLength: 1,
//     keys: [
//       "username"
//   ]
//   };

//   const fuse = new Fuse(dummyData, options); // "list" is the item array
//   const result = fuse.search("");


class Search extends React.Component {
    constructor(props){
        super(props);
        this.state={
            input: ''
        }
        
    }

    changeHandler = event => {
        this.setState({ input: event.target.value })
      };



    render() {
        return (
        <div>
        <form
        onSubmit={(event) => {
            event.preventDefault();
            this.props.handleFilter(this.state.input)
        }}>

        <input
        type="search"
        name="postFilter"
        className='search'
        placeholder="Search"
        value={this.props.postFilter}
        onChange={this.changeHandler}
        />

        </form>
        </div>      
        )
    }
}

export default Search;
