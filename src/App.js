import axios from 'axios';
import './App.css';
import Row from "./container/Row";
import requests from './requests';
import { useEffect, useState } from "react";


function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests.netflixOriginals).then(res=>{
      console.log(res)
    })
  }, [])
  return (
    <div className="App">
      <h1>Hello React</h1>
      <Row/>
    </div>
  );
}

export default App;
