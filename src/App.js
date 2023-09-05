import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
   <>
   <Navbar title = "MyApp2" aboutText="About Text" />
   {/* <Navbar title = "MyApp2" /> - if we send one thing than other things its takes from default props*/}
   {/* <Navbar/> - if we want to pass default propTypes */}
   </>
  );
}

export default App;
