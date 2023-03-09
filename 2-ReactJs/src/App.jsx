import './App.css'
import { useState } from 'react';

const App = () =>{
  const [name, setName] = useState(false);
  const x = 15;
  const numbers = [10, 12,  14,  16,  18, 20];
  const lisItems = numbers.map ((number) =>
  <li key={number.toString()}>
    {number}
  </li>)
  return ( <div className="App">
<p>{x >= 6 && x < 13 ? "Buenos días" : x >= 13 && x < 19 ? "Buenas tardes" : "Buenas noches"}</p>
<ul>{lisItems}</ul>
<button onClick={() => setName (!name) }> hola</button>
{name && <p>jesús</p>}
    </div>
  )

}
export default App;
