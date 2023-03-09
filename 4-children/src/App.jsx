import { useState } from 'react'
import './App.css'
import Title  from "./componets/Title";
import SubTitle from "./componets/SubTitle";
import Image from "./componets/Image/Image";
import Paragraph from './componets/Paragraph';
import Header from './componets/Header/Header';
import Main from "./componets/Main/Main";
import Footer from './componets/Footer/Footer';

const App = () => {
  const title = "Mi Primera Pagina Web con React";
  const subTitle = "Gallery";
  const image = "https://images.unsplash.com/photo-1538640206218-edd12e7624fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  const imageTitle = "conejo Belier"
  const paragraph = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa tempora enim ea recusandae assumenda, voluptates perferendis ducimus delectus nemo nulla labore eveniet consectetur voluptate dolor id eligendi fugiat quaerat!";

  return (
    <div className="App">
      <Header> <Title text={title} /> </Header>
      <Main> 
        <SubTitle text = {subTitle} />
        <Image source={image} title={imageTitle} />
        <Paragraph text={paragraph} /> 
      </Main>
      
      <Footer><h3>añadiendo children</h3></Footer>
    
    </div>
  );
}

export default App
