import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Menu from './components/Menu'
import Footer from './components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu />
    <Home />
    <Footer />
  </React.StrictMode>,
)
