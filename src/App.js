import React from "react";
import Weather from "./Weather";

import './App.css';

function App() {
  return (
    <div className="WeatherApp">
      <header>
        <Weather />
      </header>
      <footer> 
        Created by 
      <a href="https://github.com/SadiaSanam/Reactapp" >Sadia Sanam Sarwar</a>
      </footer>
    </div>
  );
}

export default App;
