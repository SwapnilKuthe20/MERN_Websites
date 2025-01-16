import React from 'react'
import Showproduct from './Components/Product/Showproduct';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './Components/Product/ProductDetail';
import Navbar from './Components/Navbar';
import SearchProduct from './Components/Product/SearchProduct';
import Register from './Components/User/Register';
import Login from './Components/User/Login';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import Protectedroutes from './Components/User/Protectedroutes';


const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Protectedroutes><Showproduct /></Protectedroutes>} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/product/search/:term' element={<SearchProduct />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <ToastContainer />

    </>
  )
}

export default App
