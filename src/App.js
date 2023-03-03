import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Book from './components/Book';
import Categories from './components/Categories';
import NavBar from './components/NavBar';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Book />} />
        <Route exact path="/catagories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
