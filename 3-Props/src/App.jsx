
import './App.css'
import SubTitle from "./Components/SubTitle.jsx";
import Title from "./Components/Ttle";
import Paragraph from './Components/Paragraph';
import Image from "./Image/Image";


const App = () => {
  const title = "Welcome to Components ReactJS";
  const subTitle = "This is a example components with ReactJS";
  const paragraph = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa tempora enim ea recusandae assumenda, voluptates perferendis ducimus delectus nemo nulla labore eveniet consectetur voluptate dolor id eligendi fugiat quaerat!";
  const image = 
  "https://images.unsplash.com/photo-1675539252647-12e6eb164b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";
const imageTitle = "cartel"
  return (
    <div className="App">
    <Title text={title} />
    <SubTitle text={subTitle} />
    <Paragraph text={paragraph} />
    <Image 
    source="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    title="cartel" 

    />
    <Image source={image} title={imageTitle} />
    </div>
  );
}

export default App;
