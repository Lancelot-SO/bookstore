import React from 'react';
import { Divider } from 'primereact/divider';
import Form from './Form';
import BookPage from './BookPage';
import './Book.css';

function Book() {
  return (
    <div className="book-page surface-200">
      <div className="card col-12">
        <BookPage />
      </div>
      <Divider className="book-page-divider" layout="horizontal" />
      <div className="card col-12">
        <Form />
      </div>
    </div>
  );
}

export default Book;
