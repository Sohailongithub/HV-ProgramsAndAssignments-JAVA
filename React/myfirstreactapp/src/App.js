// import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Name from './components/Name';
import Intro from './components/Intro';
import { Shortcuts } from './components/Shortcuts';
import './components/New.css' ; 


function App() {
  return (
    <div className="App">
    < Hello />
    < Name />
    <Intro />
    <Shortcuts />
    
    </div>
  );
}

export default App;
