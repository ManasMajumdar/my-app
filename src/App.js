import logo from './logo.svg';
import './App.css';

let name = "Manas"

function App() {
  return (
   <>

   <nav>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
   </nav>
   <div className="container">
    <h1>Hello {name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ducimus.</p>
   </div>

   </>
  );
}

export default App;
