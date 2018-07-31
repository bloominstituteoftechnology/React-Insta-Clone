import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import dummy from './dummy-data';

class App extends Component {
  state = {
    data: dummy
  };

  addComment = (id, comment) => {
    this.setState(prevState => ({
      data: prevState.data.map(post => {
        if (post.id === id) {
          return {
            ...post,
            comments: [
              ...post.comments,
              {
                username: 'anonymous',
                text: comment
              }
            ]
          };
        } else {
          return post;
        }
      })
    }));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <section className="container App__cards-container">
          {this.state.data.map(card => (
            <Card key={card.id} {...card} onAddComment={this.addComment} />
          ))}
        </section>
      </div>
    );
  }
}

export default App;
