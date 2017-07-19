import React, { Component } from 'react';
export default class BookList extend Component {
  renderList() {
    return this.prop.books.map((books) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}
