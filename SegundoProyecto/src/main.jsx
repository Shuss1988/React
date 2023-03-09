import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Gallery from './components/Pages/Gallery'
import Home from './components/Pages/Home'
import Login from './components/Pages/Login'
import NotFound from './components/Pages/NotFound'
import './index.css'
import { UserContextProvider } from './UserContext/User.Context'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <UserContextProvider>
      <Routes>
        <Route  path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/Gallery' element={<Gallery />} />
          <Route path='/Login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
