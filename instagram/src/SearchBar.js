import React from 'react';
import { Nav, Navbar, FormControl, FormGroup } from 'react-bootstrap';
import './SearchBar.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: ''
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    this.setState({ transform: 'navbar-fixed-top' });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;
    if (scrollTop >= 100) {
      this.setState({
        navbar: 'navbar-fixed-top navbar-transform'
      });
    } else if (scrollTop <= 100) {
      this.setState({
        navbar: 'navbar-fixed-top navbar'
      });
    }
    console.log(event.srcElement.body.scrollTop);
  }
  render() {
    return (
      <Navbar className={this.state.navbar}>
        <div className="container">
          <Navbar.Header>
            <Navbar.Brand>
              <a className="logo" href="#" />
            </Navbar.Brand>
          </Navbar.Header>
          <Nav className="nav-center">
            <Navbar.Form>
              <FormGroup>
                <div className="search-wrapper">
                  <span className="search-icon" />
                  <span className="search-text">Search</span>
                  <FormControl type="text" />
                </div>
              </FormGroup>
            </Navbar.Form>
          </Nav>
          <Nav pullRight>
            <div className="nav-right">
              <div className="exp-wrapper">
                <a className="explore" href="#" />
              </div>
              <div className="hea-wrapper">
                <a className="heart" href="#" />
              </div>
              <div className="pro-wrapper">
                <a className="profile" href="#" />
              </div>
            </div>
          </Nav>
        </div>
      </Navbar>
    );
  }
}