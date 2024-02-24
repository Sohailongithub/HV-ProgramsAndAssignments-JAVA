import './App.css';
import { useState} from 'react ';
function App() {
  const [count, setCount] = useState(0);

  function IncreaseCount(){
    let UpdatedValue = count+1;
    setCount(UpdatedValue)
  }

  return (
    <div classname="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick= {IncreaseCount}>Increase Value</button>
    </div>
  )
}

export default App;
