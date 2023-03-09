
import './App.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from 'react-router-dom'
import Title from './components/Title';
import Nav from './components/NavBar/Nav';
import Paragraph  from "./components/Paragraph";


function App() {
  return (
    <div className="App">
      <Header><Nav />
      <Title> hola</Title>
      </Header>
      <Outlet />
      <Footer> <Paragraph> Neoland </Paragraph></Footer>
    </div>
  )
}

export default App
