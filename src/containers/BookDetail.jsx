import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div>Select a Book</div>;
    }
    return (
      <div className="col-md-9">
        <h3>Book Detail: </h3>
        <div className="well">{ this.props.book.title }
          <div>Number of Pages: {this.props.book.pages}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);