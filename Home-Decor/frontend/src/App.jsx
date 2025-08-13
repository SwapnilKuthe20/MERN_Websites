import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import NotFound from './Components/Pages/NotFound'
import Footer from './Components/Footer'

function App() {

  return (
    <div className='w-full h-screen bg-[#EBF7FD] text-[#233142]'>
      <Routes>
        <Route path='/' element={<Navbar />} >

          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='footer' element={<Footer />} /> */}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
