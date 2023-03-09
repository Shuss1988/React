import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'


function App() {

  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  )
}

export default App
