import React from 'react';
//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"; //importamos el sistema de rutas.
import Admin from './pages/Admin';
import SignIn from './pages/Admin/SignIn';
import Home from './pages/Home';
import Contac from './pages/Contac';
import "./App.scss";

function App() {
  return (
    <div>
      <h1>Estamos dentro de App.js</h1>
      <Admin />
      <SignIn />
      <Home />
      <Contac />
    </div>
  );
}



export default App;
