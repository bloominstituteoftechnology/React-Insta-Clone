import React from 'react';
import styled from 'styled-components';
import './SearchBar.css';

const Title = styled.div`
    font-size: 24px;
    display: flex;
    border-bottom: 1px solid gray;
    margin-bottom: 5px;
    text-align: center;
  }
`;

const Logo = styled.div`
    margin-left: -14px;
    margin-top: 5px;
  }
`;

const SearchBox = styled.input`
  font-family: FontAwesome;
  text-align: center;
  width: 600px;
  padding-top: 0px;
  margin-top: -15px;
  margin-bottom: 5px;
  margin-left: 39px;
`;
class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
    };
  }

  handleClick = () => {
    localStorage.setItem('user', '');
    alert('Logging out ...');
    window.location.reload();
  };

  handleSearchChange = e => {
    let term = e.target.value;
    this.setState({ search: term });
    this.props.searchHandler(term);
  };

  render() {
    return (
      <div className="container">
        <Title className="row">
          <Logo>
            <i className="col-sm-1 fab fa-instagram" />
          </Logo>

          <div className="divider" />
          <div className="col-sm-1 instaFont">Instagram</div>
          <div className="col-sm-8">
            <SearchBox
              onChange={this.handleSearchChange}
              type="text"
              name="search"
              placeholder="&#61442; Search"
              value={this.state.search}
            />
          </div>
          <div>
            <i className="col-sm-1 far fa-compass" />
            <i className="col-sm-1 far fa-heart" />
            <i onClick={this.handleClick} className="col-sm-1 far fa-user" />
          </div>
        </Title>
      </div>
    );
  }
}

export default SearchBar;
