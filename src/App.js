import './App.css';
import Cart from './pages/Cart/Cart';
import MainPage from './pages/MainPage/MainPage';
import { Routes, Route, BrowserRouter } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <div style={{ margin: '0 auto' }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorites' element={<></>} />
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
