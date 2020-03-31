import React from 'react';
import "./App.scss";
import { DatePicker } from 'antd';

function App() {
  const test = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="app">
      <h1> Web Personal - Client </h1>
      <h2>hola</h2>
      <DatePicker onChange={test}/>
    </div>
  );
}

export default App;
