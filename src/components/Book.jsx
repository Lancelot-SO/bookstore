/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

function Book({ books }) {
  const booklist = books.length ? (
    <ul>
      {
      books.map((book) => (
        <li key={book.id}>
          {book.title}
          <p>
            {book.author}
          </p>
          <button id={book.id} type="button">Remove</button>
        </li>
      ))
    }
    </ul>
  ) : (
    <p>there is no book on the shelf</p>
  );

  return (
    <div>
      {booklist}
      <Form />
    </div>
  );
}

Book.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
};

export default Book;
