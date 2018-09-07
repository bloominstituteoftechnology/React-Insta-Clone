import React from 'react';
import dummy_data from '../../dummy-data';
import uuidv4 from 'uuid/v4';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from  '../PostContainer/PostContainer';
import styled from 'styled-components';

class PostPage extends React.Component {
  constructor() {
    super();

    this.state = {
      dummyData: []
    }
  }

  componentDidMount() {
    this.setState({
      dummyData: dummy_data
    })
  }

  filterSearch = (term) => {
    this.setState({
      dummyData: dummy_data.filter(post => post.username.includes(term))
    })
  }

  logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  render() {
    const {dummyData} = this.state;
    return (
      <AppContainer>
      <LogoutButton onClick={this.logout}>Logout</LogoutButton>
        <SearchBar filterSearch={this.filterSearch} />
        {
          dummyData.map(post => <PostContainer key={uuidv4()} postData={post} />)
        }        
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  text-align: center;
`;

const LogoutButton = styled.button`
  width: 100%;
  border: 1px solid transparent;
  font-size: 1.2rem;
  background: lightcoral;
  color: #fff;
  font-weight: bold;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: 300ms ease-in-out;
  &:hover {
    box-shadow: 0 4px 7px rgba(0,0,0,0.25), 0 3px 3px rgba(0,0,0,0.22);
  }
`;

export default PostPage;