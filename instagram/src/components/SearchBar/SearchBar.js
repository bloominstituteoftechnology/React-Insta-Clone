import React, { Component } from 'react';


class SearchBar extends Component {
  constructor() {
    super();
    
    this.state = {
      searchItem: ''
    };

  };

  handleChange = event => {
    this.setState({searchItem: event.target.value});
  };

  render() {
    return (
      <div className={'row'}>
          <div className={'col-3'}>
          <img src={this.props.headerImage} style={{height: '150px', width: '150px'}} alt='logo' />
          </div>
          <div className={'col-9 d-flex justify-content-start align-items-center'}>
              <form className={'form'}>
                  <input className={'w-100'}
                  type='text'
                  onChange={this.handleChange}
                  placeholder='Search'
                  valu={this.state.searchItem}
                  />
              </form>
          </div>
      </div>
    );
  }
}

export default SearchBar;