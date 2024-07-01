//external imports
import { Routes, Route } from 'react-router-dom';
//internal imports
import HomePage from './components/HomePage/HomePage';
import CustomerList from './components/Customer/CustomerList/CustomerList';
import CustomerForm from "./components/Customer/CustomerForm/CustomerForm";
import ProductList from './components/Product/ProductList/ProductList';
import ProductForm from './components/Product/ProductForm/ProductForm';
import NotFound from './components/NotFound/NotFound';
import NavBar from './components/NavBar/NavBar';
import OrderForm from './components/OrderForm/OrderForm';
import OrderList from './components/OrderList/OrderList';
import './App.css'; 

function App() {


  return (
    <div id="app-container">
      <NavBar />
      <Routes>
        {/* 2 most important routes, HomePage/base and then NotFound */}
        <Route path='/' element={ <HomePage />} />
        {/* Catch All Route for undefined paths */}
        <Route path='*' element={ <NotFound />} />
        <Route path='/customers' element={ <CustomerList />} />
        <Route path='/add-customer' element={ <CustomerForm />} />
        <Route path='/edit-customers/:id' element={ <CustomerForm />} />
        <Route path='/products' element={ <ProductList />} />
        <Route path='/add-product' element={ <ProductForm />} />
        <Route path='/edit-products/:id' element={ <ProductForm />} />
        <Route path="/add-orders" element={<OrderForm />} />
        <Route path="/orders" element={<OrderList />} />
      </Routes>
    </div>
  )
}

export default App