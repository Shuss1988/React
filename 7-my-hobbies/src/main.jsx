import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Home from "./pages/Home"
import Listado from "./pages/Listado";
import About from "./pages/About";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />}/>
          <Route path='/Listado' element={<Listado />}/>
          <Route path='About' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
