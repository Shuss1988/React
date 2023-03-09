import React from 'react'
import  ReactDOM  from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from "./Pages/Home"
import Gallery from './Pages/Gallery'
import Login from "./Pages/Login"
import NotFound from './Pages/NotFound'
import './index.css'
import { UserContextProvider } from './components/context/userContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/login" element={<Login />} />     
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
