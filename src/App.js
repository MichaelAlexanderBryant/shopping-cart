import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ShoppingCart from './pages/ShoppingCart';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [booksInCart, setBooksInCart] = useState([]);
  return (
    <HashRouter>
      <div className="App">
          <NavBar  booksInCart={booksInCart.length} />
          <Routes>
            <Route path="/" exact element={<HomePage booksInCart={booksInCart} setBooksInCart={setBooksInCart} />} />
            <Route path="/books" exact element={<ShopPage booksInCart={booksInCart} setBooksInCart={setBooksInCart} />} />
            <Route path="/cart" exact element={<ShoppingCart booksInCart={booksInCart} setBooksInCart={setBooksInCart} />} />
          </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
