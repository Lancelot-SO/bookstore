import React from 'react';
import { Divider } from 'primereact/divider';
import Form from './Form';
import BookPage from './BookPage';

function Book() {
  return (
    <div className="grid surface-200 pt-3">
      <div className="card col-12">
        <BookPage />
      </div>
      <Divider className="lg:ml-8 lg:mr-8 sm:ml-2 sm:mr-4 mb-0" layout="horizontal" />
      <div className="card col-12">
        <Form />
      </div>
    </div>
  );
}

export default Book;
