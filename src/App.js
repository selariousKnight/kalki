import './App.css';
import { useState , useEffect} from 'react';

function App() {
  
  let [count,countFunc] = useState(0);

  useEffect(()=>{
   
    

  },[count]);
  return (
    <div className='App'>
    <h1>Count is as of now is {count}</h1>
    <button onClick={()=> countFunc(count+1)}>Increase Count</button>
    <button onClick={()=> countFunc(count-1)}>Decrease Count</button>
    </div>
  );
 
}

export default App;
