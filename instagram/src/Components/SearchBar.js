import React from 'react';
import { Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarStart,
  NavbarEnd,
  Icon,
  Field,
  Control,
  Subtitle,
  Input} from 'bloomer';

const SearchBar = (props) => {
  return (
    <Navbar style={{border: 'solid 1px #343434', margin: '0'}}>
      <NavbarBrand>
        <NavbarItem>
          <Icon isSize="large">
            <span className="fa fa-2x fa-instagram" />
          </Icon>
          <Subtitle isSize="3" style={{fontFamily: 'Lobster'}}> | Instagram</Subtitle>
        </NavbarItem>
        <NavbarItem isHidden="desktop">
          <Icon isSize="medium">
            <span className="fa fa-lg fa-compass" aria-hidden="true" />
          </Icon>
        </NavbarItem>
        <NavbarItem isHidden="desktop">
          <Icon isSize="medium">
            <span className="fa fa-lg fa-heart-o" aria-hidden="true" />
          </Icon>
        </NavbarItem>
        <NavbarItem isHidden="desktop">
          <Icon isSize="medium">
            <span className="fa fa-lg fa-user-o" aria-hidden="true" />
          </Icon>
        </NavbarItem>
      </NavbarBrand>
      <NavbarStart />
      <NavbarItem>
        <Field>
          <Control hasIcons>
            <Input onChange={props.handleChange} type="text" placeholder="Search" value={props.searchTerm} />
            <Icon isSize="small" isAlign="right">
              <span className="fa fa-search" aria-hidden="true" />
            </Icon>
          </Control>
        </Field>
      </NavbarItem>
      <NavbarEnd>
        <NavbarItem isHidden="touch">
          <Icon isSize="medium">
            <span className="fa fa-lg fa-compass" aria-hidden="true" />
          </Icon>
        </NavbarItem>
        <NavbarItem isHidden="touch">
          <Icon isSize="medium">
            <span className="fa fa-lg fa-heart-o" aria-hidden="true" />
          </Icon>
        </NavbarItem>
        <NavbarItem isHidden="touch">
          <Icon isSize="medium">
            <span className="fa fa-lg fa-user-o" aria-hidden="true" />
          </Icon>
        </NavbarItem>
      </NavbarEnd>
    </Navbar>
  );
};

export default SearchBar;
