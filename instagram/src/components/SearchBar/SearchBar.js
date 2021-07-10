import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Field,
  Control,
  Input
} from "react-bulma-components/lib/components/form";
import Icon from "react-bulma-components/lib/components/icon";
import "./SearchBar.scss";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: [],
      newSearch: ""
    };
  }

  onTextInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="searchForm">
        <Field>
          <Control iconLeft>
            <Input
              type="text"
              placeholder="Search"
              name="newSearch"
              onChange={this.onTextInputChange}
              value={this.state.newSearch}
            />
            <Icon align="left">
              <FontAwesomeIcon icon={["fas", "search"]} size="lg" />
            </Icon>
          </Control>
        </Field>
      </div>
    );
  }
}

export default SearchBar;
