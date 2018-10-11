import React from 'react';

class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className='search-bar'>
        <div>
          <div>insta logo</div>
          <div>Instagram</div>
        </div>
        <form>
          <input type='text' value='search' />
        </form>
        <div>compass, like and user</div>
      </div>
    )
  }
}

export default SearchBar;
