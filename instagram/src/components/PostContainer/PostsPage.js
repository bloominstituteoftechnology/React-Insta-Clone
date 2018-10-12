import React, { Component } from "react";
import dummyData from "./dummy-data";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import { LogInOutButton } from '../Styles/Reusables';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: flex-end;
width: 1100px;
align-items: flex-start;
margin-top: -20px;
`

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      searchResults: [],
      logoutVisible: false
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  handleSearch = event => {
    this.setState({
      searchResults: this.state.data.filter(post =>
        post.username.includes(event.target.value)
      )
    });
  };

  handleLogOut = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };
  showLogout = () =>
    this.setState({ logoutVisible: !this.state.logoutVisible });
  render() {
    return (
      <Container>
        <SearchBar
          handleSearch={this.handleSearch}
          showLogout={this.showLogout}
        />
        <ButtonContainer>
        <LogInOutButton
          onClick={this.handleLogOut}
          style={
            this.state.logoutVisible
              ? { display: "block" }
              : { display: "none" }
          }

        >
          Log Out
        </LogInOutButton>
        </ButtonContainer>
        <MainContent>
          <PostContainer
            data={
              !this.state.searchResults.length
                ? this.state.data
                : this.state.searchResults
            }
          />
        </MainContent>
      </Container>
    );
  }
}

export default PostsPage;
