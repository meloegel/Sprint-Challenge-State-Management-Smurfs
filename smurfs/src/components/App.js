import React, { useState, useEffect } from "react";
import "./App.css";
import SmurfForm from './SmurfForm'
import Smurfs from './SmurfList'
import {SmurfContext} from '../contexts/SmurfContext'
import axios from 'axios'

function App() {
  const [smurfs, setSmurfs] = useState([])


  const addSmurf = newSmurf => {
    setSmurfs([...smurfs, newSmurf]);
  }

  useEffect(() => {
    axios.get('http://localhost:3333/smurfs')
      .then(res => setSmurfs(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
    <SmurfContext.Provider value={{ addSmurf, smurfs }}>
      <div className="App">
        <h1>Smurfs</h1>
        <Smurfs />
        <SmurfForm />
      </div>
    </SmurfContext.Provider>
  );
}


export default App;
