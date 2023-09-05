import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';

function App() {
  return (
   <>
   <Navbar title = "MyApp2" aboutText="About Text" />
   {/* <Navbar title = "MyApp2" /> - if we send one thing than other things its takes from default props*/}
   {/* <Navbar/> - if we want to pass default propTypes */}
   <div className="container">
   {/* <TextForm heading="Enter the text to analyze below" /> */}
   <About/>
   </div>
   </>
  );
}

export default App;
