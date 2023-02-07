import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [booksInCart, setBooksInCart] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar  booksInCart={booksInCart.length} />
          <Routes>
            <Route path="/" exact element={<HomePage booksInCart={booksInCart} setBooksInCart={setBooksInCart} />} />
            <Route path="/books" element={<ShopPage booksInCart={booksInCart} setBooksInCart={setBooksInCart} />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
