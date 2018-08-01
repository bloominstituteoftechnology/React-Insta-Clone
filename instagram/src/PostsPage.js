import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fuzzysearch from 'fuzzysearch';
import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import dummy from './dummy-data';

class PostsPage extends Component {
  state = {
    data: [],
    searchTerm: ''
  };

  componentDidMount() {
    const localData = JSON.parse(localStorage.getItem('insta-data'));
    if (localData) {
      this.setState({
        data: localData
      });
    } else {
      this.setState({
        data: dummy
      });
    }
  }

  updateLocalStorage = () =>
    localStorage.setItem('insta-data', JSON.stringify(this.state.data));

  handleAddComment = (id, comment) => {
    this.setState(
      prevState => ({
        data: prevState.data.map(post => {
          if (post.id === id) {
            return {
              ...post,
              comments: [
                ...post.comments,
                {
                  username: localStorage.getItem('insta-user'),
                  text: comment
                }
              ]
            };
          } else {
            return post;
          }
        })
      }),
      this.updateLocalStorage
    );
  };

  handleDeleteComment = (id, commentToDelete) => {
    this.setState(
      prevState => ({
        data: prevState.data.map(post => {
          if (post.id === id) {
            return {
              ...post,
              comments: post.comments.filter(
                comment =>
                  JSON.stringify(comment) !== JSON.stringify(commentToDelete)
              )
            };
          } else {
            return post;
          }
        })
      }),
      this.updateLocalStorage
    );
  };

  handleToggleLike = (id, liked) => {
    this.setState(
      prevState => ({
        data: prevState.data.map(post => {
          if (post.id === id) {
            if (liked) {
              return {
                ...post,
                likes: post.likes + 1,
                liked
              };
            } else {
              return {
                ...post,
                likes: post.likes - 1,
                liked
              };
            }
          } else {
            return post;
          }
        })
      }),
      this.updateLocalStorage
    );
  };

  handleSearch = searchTerm => this.setState({ searchTerm });

  render() {
    return (
      <div className="App">
        <Header onLogOut={this.props.onLogOut} onSearch={this.handleSearch} />
        <section className="container App__cards-container">
          {this.state.data
            .filter(card =>
              fuzzysearch(
                this.state.searchTerm.toLowerCase(),
                card.username.toLowerCase()
              )
            )
            .map(card => (
              <Card
                key={card.id}
                {...card}
                onAddComment={this.handleAddComment}
                onToggleLike={this.handleToggleLike}
                onDeleteComment={this.handleDeleteComment}
              />
            ))}
        </section>
      </div>
    );
  }
}

PostsPage.propTypes = {
  onLogOut: PropTypes.func.isRequired
};

export default PostsPage;
