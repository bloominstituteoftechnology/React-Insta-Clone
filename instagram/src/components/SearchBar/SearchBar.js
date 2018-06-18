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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <i className="fab fa-instagram fa-2x" /> | Instagram
          </NavbarBrand>
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
      </div>
    );
  }
}
