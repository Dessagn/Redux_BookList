import React, { Component } from 'react';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetail';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
