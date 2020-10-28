import React,{useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
function App() {
  useEffect(()=>{
    fetch(`/.netlify/functions/hello`)
    .then(res=>res.json()
    .then(result=>console.log(result))
    )
    .catch(err=>console.log(err))
  },[])
  return (
    <div className="App">
      <h1>23</h1>
    </div>
  );
}

export default App;
