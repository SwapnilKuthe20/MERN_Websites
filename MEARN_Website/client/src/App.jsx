import React, { useContext } from 'react'
import Showproduct from './Components/Product/Showproduct';
import { Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Showproduct />} />

      </Routes>
    </>
  )
}

export default App
