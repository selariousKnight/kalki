import React from 'react';
import './App.css';



function GiveListData( {data, emptyData , renderData}){


  return !data ? emptyData : (data.map((ele)=> <ul key = {ele.name}><li>{renderData(ele)}</li></ul>));

}

let dataObj = [
  {
    name : "Pavan",
    age : "21"
  },
  {
    name : "kalyan",
    age : "21"
  },
  {
    name : "Random",
    age : "21"
  },
  {
    name : "Movments",
    age : "21"
  },
  {
    name : "Regaltos",
    age : "21"
  },

]

function App() {


  return (
   
    <GiveListData data = {dataObj} emptyData = {<p>No Data Found</p>} renderData = {(item)=> <>{item.name} - {item.age}</> }/>
    
  );
 
}

export default App;
