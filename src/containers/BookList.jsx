//This is a container component! OR on the other hand it is called smart componet and it has a direct access to state of our app in redux
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';//This is imported actionCreator
import { bindActionCreators } from 'redux';//This is a function that makes sure that the action created by the actionCreator ends up flowing through all the reducers
class BookList extends Component {
  bookList = () => {
    return this.props.books.map(book => {
      return (
      <li key={book.title} className="list-group-item"> {book.title} </li>
    );
    });
  }

  render() {
    return (
      <ul className="list-group col-md-8">
        { this.bookList() }
      </ul>
    );
  }
}

function mapStateToProps(state) {
  //Whatever is returned from here will show up as props inside of BookList
  //This mapStateToProps function has access to our state scince it takes 'state' as its argument
  //console.log('state', state);
  return {
    books: state.books,
  };
}

//Anything returned from this function will endup as props to the component upon which it is called
function mapDispachToProps(dispatch) {
  //Whenever selectBook is called, the result should be passed to all our reducers
  //That is what the "bindActionCreators" does using "dispatch" function
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//  CONNECT will take "the" function and component to produce a container. That is why containers are state aware components
export default connect(mapStateToProps, mapDispachToProps)(BookList);