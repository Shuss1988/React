import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Gallery from './Pages/Gallery/Gallery'
import Header from './components/Header/header'
import About from './Pages/About/About'
import Layout from './components/Layout/Layout'
import ProtectedRoute from './components/ProtectedRoute'



const App = () => {

  return (
    <div className="App">
    <Layout>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/About' element={<About />} />
        <Route path='/Gallery' element={
          <ProtectedRoute> 
            <Gallery /> 
          </ProtectedRoute>} />
      </Routes>
      </Layout>
    </div>
  )
}

export default App
