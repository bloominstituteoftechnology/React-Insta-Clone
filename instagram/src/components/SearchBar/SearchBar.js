import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      term: ""
    }
  }


  search = (event) => {
    event.preventDefault()
    this.props.search(this.state.term)
  }

  updateTerm = (event) => {
    this.setState({ term: event.target.value })
  }

 


  render(){
    return (
        <div className="SearchBarDiv">
            <div className="InstagramLogo">
                <img id="InstagramCam" src="https://i1.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Instagram-Logo.png?w=600&ssl=1" alt="1" />
                <img id="InstagramBrand" src="https://www.edigitalagency.com.au/wp-content/uploads/instagram-logo-text-black-png.png" alt="3" />
            </div>
            {/* <Form onSubmit={this.search}>
          <Input
            value={this.state.term}
            placeholder="🔍 Search"
            onChange={this.updateTerm}
          />
        </Form> */}
            <div className="InstagramIcon">
                <img id="Explore" src="https://static.thenounproject.com/png/682472-200.png" alt="1" />
                <img id="Likes" src="https://static.thenounproject.com/png/682470-200.png" alt="2" />
                <img id="User" src="https://static.thenounproject.com/png/682480-200.png" alt="3" />
            </div>
        </div>
    )
  }
}

export default SearchBar;