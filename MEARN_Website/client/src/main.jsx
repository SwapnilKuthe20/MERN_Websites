import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppState from './ContexApi/AppState.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppState>
      <App />
    </AppState>
  </BrowserRouter>
)
