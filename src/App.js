import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/books" element={<ShopPage />} />
          </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
