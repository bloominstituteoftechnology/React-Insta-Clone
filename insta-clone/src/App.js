import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    card: [],
    filteredCard: []
  };

  componentDidMount() {
    this.setState({ card: dummyData });
  };

  searchPostsHandler = e => {
    const card = this.state.card.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredCard: card });
  }

  handleAddComment = (textInput, id, e) => {
    e.preventDefault();
    const cardID = this.state.card.findIndex(c => c.id === id);

    if (cardID !== -1) {
      const oldCard = this.state.card[cardID];
      const newCard = {...oldCard};
      newCard.comments.push({username: 'snow', text: textInput});
      
      const allCards = [...this.state.card];
      allCards.splice(cardID, 1, newCard);

      this.setState({ card: allCards });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <SearchBar
          searchPosts={this.searchPostsHandler} />

        <PostContainer
          posts={this.state.filteredCard.length > 0 ? this.state.filteredCard : this.state.card}
          addComment={this.handleAddComment} />
      </div>
    );
  }
}

App.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.object
  )
};

export default App;
