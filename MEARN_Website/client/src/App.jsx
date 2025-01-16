import React from 'react'
import Showproduct from './Components/Product/Showproduct';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './Components/Product/ProductDetail';
import Navbar from './Components/Navbar';
import SearchProduct from './Components/Product/SearchProduct';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Showproduct />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/product/search/:term' element={<SearchProduct />} />
      </Routes>
    </>
  )
}

export default App
