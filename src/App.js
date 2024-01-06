import './App.css';
import { useReducer} from 'react';

function App() {
  
  let [checked,countFunc] = useReducer(checked=> !checked ,false );

  return (
    <div className='App'>
     <input type = "checkbox" value = {checked} onChange = {countFunc}/>
     <label>{checked ? "Checked" : "Not Checked"}</label>
    </div>
  );
 
}

export default App;
