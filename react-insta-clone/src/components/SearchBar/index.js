import React from "react";
import "./Header.css";

class Header extends React.Component {

  handleSearch(event) {
  this.props.searchPosts(event.target.value)

 }

  render() {
    return (<nav className="Nav">
      <div className="Nav-menus">
        <div className="Nav-brand">
          <a className="Nav-brand-logo" href="/">
            Instagram
          </a>

        </div>

        <form>
          <div class="inner-addon left-addon">
            <i class="fas fa-search"></i>

            <input type="text" placeholder=" search" ref={input => this.search = input} onKeyUp={this.handleSearch.bind(this)}/>

            <i class="far fa-compass fa-lg"></i>
            <i class="far fa-heart fa-lg"></i>
            <i class="far fa-user fa-lg"></i>

          </div>

        </form>
      </div>
    </nav>);
  }
}
export default Header;
