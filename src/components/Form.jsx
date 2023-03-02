import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { postBooks } from '../redux/books/booksSlice';
import './Form.css';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAutor] = useState('');
  const [category, setCategory] = useState({});
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    if (title !== '' && author !== '') {
      e.preventDefault();
      let newcategories = '';
      if (Object.keys(category) === 0) {
        newcategories = 'Fiction';
      } else {
        newcategories = category.category;
      }

      const book = {
        item_id: `item${uuidv4()}`,
        title,
        author,
        category: newcategories,
      };
      dispatch(postBooks(book));
      setTitle('');
      setAutor('');
    }
  };
  return (
    <div className="main-container">
      <div className="add-new">
        <div>ADD NEW BOOK</div>
      </div>
      <form className="form">
        <div className="form-container">
          <span className="p-input-icon-left form-input-icon">
            <i className="pi pi-book" />
            <InputText
              placeholder="Book title"
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-input-icon"
            />
          </span>
        </div>
        <div className="flex flex-column sm:flex-row w-auto gap-3">
          <span className="p-input-icon-left">
            <i className="pi pi-user" />
            <InputText
              placeholder="Author"
              required
              type="text"
              value={author}
              onChange={(e) => setAutor(e.target.value)}
            />
          </span>
          <Dropdown
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="form-category"
            options={categories}
            optionLabel="category"
          />
          <Button
            onClick={addBookHandler}
            className="add-book"
            label="ADD BOOK"
            size="lg"
          />
        </div>
      </form>

    </div>
  );
}

export default Form;
