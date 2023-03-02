import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Knob } from 'primereact/knob';
import { Divider } from 'primereact/divider';
import { fetchBooks, deleteBooks } from '../redux/books/booksSlice';
import './BookPage.css';

export default function BookPage() {
  const bookstore = useSelector((state) => state.books.bookstore);
  const status = useSelector((state) => state.books.status);
  const [value, setValue] = useState(Math.floor(Math.random() * 100));
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
    if (status === 'succeeded') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  const bookDisplay = (bookstore) => (
    <card className="card">
      <div className="card-box">
        <div className="card-container">
          <div className="card-container-box">
            <div className="card-category">{bookstore.category}</div>
            <div className="card-title">{bookstore.title}</div>
            <div className="card-author">{bookstore.author}</div>
            <div className="card-span">
              <span className="card-span-first">
                <Button label="Comments" className="card-button" text />
                <Divider layout="vertical" />
                <Button onClick={() => dispatch(deleteBooks(bookstore.id))} label="Remove" className="card-button" text />
                <Divider layout="vertical" className="h-1" />
                <Button label="Edit" className="card-button" text />
              </span>
            </div>
          </div>
          <div className="card-circle">
            <div className="card-circle-first">
              <Knob
                showValue={false}
                value={value}
                onChange={() => setValue(value)}
                strokeWidth={5}
                valueColor="#3B82F6"
                className="primary-color"
              />
              <div className="card-knob">
                <span className="card-knob-span">
                  {value}
                  %
                </span>
                <span>
                  completed
                </span>

              </div>
              <Divider s layout="vertical" />
            </div>
          </div>
          <div className="card-chapter">
            <span className="card-chapter-text">
              CURRENT CHAPTER
            </span>
            <span className="card-chapter-lesson">
              CHAPTER 17:A Lesson Learned
            </span>
            <Button className="card-update" size="sm" label="UPDATE PROGRESS" />
          </div>
        </div>
      </div>
    </card>

  );
  return (
    <div>
      <DataView
        value={bookstore}
        itemTemplate={bookDisplay}
        className="card-surface"
      />
    </div>
  );
}
