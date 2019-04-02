import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';

// For AccuWeather
// const accuWeatherApiKey = "zGMrtQk3SYG1GHD4TJkZYE9HA2srB277";
// const apiUrl = "http://dataservice.accuweather.com/locations/v1/postalcodes/search";
// let weatherStats = [];

class App extends React.Component {
    constructor (props) {
      super (props);
    this.state = {
      cards: dummyData       
    };

  }
  
render () {
  return (
    <div id="root">
    <h2>Bring me the disco king</h2>
    <SearchBar />
    </div>
  );
}
} // Program End

export default App;  
