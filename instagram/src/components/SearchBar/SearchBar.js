import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FlexDiv, Button } from '../styles/basicStyles';
import { Container, Header, Logo, AppName, SearchInput, IconGroup, IconLink } from '../styles/headerStyles';

import Fuse from 'fuse.js';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: ""
    };
  }

  setSearchInput = (event) => {
    this.setState({searchInput: event.target.value});
  }

  searchUsername = (event) => {
    event.preventDefault();
    const users = this.props.users.slice();

    const options = {
      keys: ['username'],
      threshold: 0.6,
    }
    const fuse = new Fuse(users, options);
    const searchResult = fuse.search(this.state.searchInput);
    this.props.update(searchResult);
  }

  render() {
    return (
      <Container fixed>
        <Header>
          <FlexDiv>
            <Logo>
              <a href="/">
                <FontAwesomeIcon
                  icon={['fab', 'instagram']}
                  size="sm"
                />
              </a>
            </Logo>
            <AppName>
              <a href="/">Instagram</a>
            </AppName>
          </FlexDiv>
          <form onSubmit={this.searchUsername}>
            <SearchInput type="text" placeholder="Search" onChange={this.setSearchInput} value={this.state.searchInput} />
            <input type="submit" hidden />
          </form>
          <IconGroup>
            <IconLink>
              <a href="/">
                <FontAwesomeIcon
                  icon={['fas', 'compass']}
                  size="lg"
                />
              </a>
            </IconLink>
            <IconLink>
              <a href="/">
                <FontAwesomeIcon
                    icon={['fas', 'heart']}
                    size="lg"
                />
              </a>
            </IconLink>
            <IconLink>
              <a href="/">
                <FontAwesomeIcon
                  icon={['fas', 'user']}
                  size="lg"
                />
              </a>  
            </IconLink>
            <IconLink>
              <span> {this.props.user}</span>
            </IconLink>
            <a href="/"><Button onClick={() => localStorage.removeItem('currentUser')}>Logout</Button></a>
          </IconGroup>
        </Header>
      </Container>
    );
  }
};

export default SearchBar;