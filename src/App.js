import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="WeatherApp">
      <div className="container">
      <header>
        <Weather defaultCity="Paris" />
      </header>
      <footer> 
        Created by
      <a href="https://github.com/SadiaSanam/Reactapp"> Sadia Sanam Sarwar</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
