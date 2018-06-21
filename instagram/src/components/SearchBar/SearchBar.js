import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import styled from "styled-components";

const Header = styled.header``;
const LogoHeader = styled.div`
  font-family: "Grand Hotel", cursive;
`;
const LogoImage = styled.img``; // Put FontAwesome css here
const LogoText = styled.span`
  font-size: 2em;
`;
export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Header>
        <Navbar color="light" light expand="md">
          <LogoHeader>
            <NavbarBrand href="/">
              <i className="fab fa-instagram fa-2x" />
              <LogoText> | Instagram</LogoText>
            </NavbarBrand>
          </LogoHeader>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input
                    type="search"
                    name="search"
                    id="search"
                    placeholder={
                      <i className="fas fa-search" /> + "\uf002 Search"
                    }
                  />
                </FormGroup>
              </Form>
              <NavItem>
                <NavLink href="#">
                  <i className="far fa-compass fa-2x" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <i className="far fa-heart fa-2x" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <i className="far fa-user fa-2x" />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Header>
    );
  }
}
