import { Outlet } from 'react-router-dom'
import './App.css'
import Layout from './Layout/Layout'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

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
