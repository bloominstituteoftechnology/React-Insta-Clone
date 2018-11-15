import React from "react";
import styled from 'styled-components';
 const Header = styled.header`
  background-color: white;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0px;
  width:100%;
  height: 8rem;
  border-bottom:1px solid grey;
`;
 const Container = styled.div`
  display: flex;
  width: 100rem;
`;
 const LogoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:20%;
  cursor: pointer;
`;
 const LogoImage = styled.i`
  font-size: 3.5rem;
`;
 const Title = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 2.5rem;
  border-left: 1px solid black;
  padding-left: 2.5rem;
`; 
 const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width:60%;
`;
 const Search = styled.input`
  text-align: center;
  height: 3rem;
  width:20rem;
  border-radius: 0.25rem;
  background-color: #FAFAFA;
`;
 const Link = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
`;
 const A = styled.a`
  color: grey;
`;
 const SearchBar = props => {
  return (
    <Header>  
      <Container>
        <LogoHeader>
          <LogoImage className="fab fa-instagram" />
          <Title>Instagram</Title>
        </LogoHeader>
        <Form onSubmit={props.filterItems}>
          <Search
            type="text"
            className="fa fa-input"
            placeholder="&#xf002; Search"
            value={props.filter}
            onChange={props.handleInputChange}
          />
        </Form>
        <Link>
          <A href="">
            <LogoImage className="fas fa-chevron-circle-down" />
          </A>
          <A href="">
            <LogoImage className="far fa-heart" />
          </A>
          <A href="">
            <LogoImage className="far fa-user" />
          </A>
        </Link>
      </Container>
    </Header>        
  );
};
 export default SearchBar;