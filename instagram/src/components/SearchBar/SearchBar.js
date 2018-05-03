import React from 'react';
import './SearchBar.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, InputGroup, InputGroupText, InputGroupAddon, Input
} from 'reactstrap';

export default class Example extends React.Component {
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
                    <NavbarBrand href="#">
                        <i class="fa fa-instagram"></i>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <div>
                                    <InputGroup>
                                        <Input />
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText>SEARCH</InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                            </NavItem>
                            <NavItem>
                                <NavLink><i class="far fa-heart"></i></NavLink>
                            </NavItem>
                            
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}