import logo from './logo.svg';
import {BrowserRouter as Router,Routes, Route, Navigate} from "react-router-dom"
import Home from './pages/Home';
import './App.css';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import LogIn from './pages/LogIn';
import Cart from './pages/Cart';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Register' element={<Register />}/>
          <Route path='/LogIn' element={<LogIn />}/>
          <Route path='/Cart' element={<Cart />}/>
          <Route path='/Products' element={<ProductList />}/>
          <Route path='/Product' element={<Product />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
