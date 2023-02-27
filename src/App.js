import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Book from './components/Book';
import Categories from './components/Categories';
import NavBar from './components/NavBar';

function App() {
  const bookshop = [
    {
      id: 1,
      title: 'The Lord of the Rings',
      author: 'J. R. R.Tolkien',
    },
  ];
  const [books, setBooks] = useState(bookshop);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Book books={books} setBooks={setBooks} />} />
        <Route exact path="/catagories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
