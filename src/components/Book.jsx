import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from './Form';
import { removeBook } from '../redux/books/booksSlice';

function Book() {
  const bookstore = useSelector((state) => state.books.bookstore);
  const dispatch = useDispatch();
  const booklist = bookstore.length ? (
    <ul>
      {
        bookstore.map((book) => (
          <li key={book.id}>
            {book.title}
            <p>
              {book.author}
            </p>
            <button
              id={book.id}
              onClick={() => dispatch(removeBook(book.id))}
              type="button"
            >
              Remove

            </button>
          </li>
        ))
    }
    </ul>
  ) : (
    <p>Shelf is empty</p>
  );

  return (
    <div>
      {booklist}
      <Form />
    </div>
  );
}

export default Book;
