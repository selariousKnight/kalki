import './App.css';
import { useState , useEffect } from 'react';

function User({name}){

    return <h1>{name}</h1>
  
}


function App() {
  let [data , fetchData] = useState(null);

  useEffect(()=>{

    fetch(`https://ap.github.com/users/moonhighway`).then((response)=> response.json()).then(fetchData);


  },[data]);

  if (data){
    return <User name = {data.name}/>
  }

  return (
    <h1>Data</h1>
  );
 
}

export default App;
