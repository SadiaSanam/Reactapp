import React from "react";
import "./Weather.css";

export default function Weather() {
    return (<div className="weather">
    <form>
    <div className="row">
     <div className="col-9">
      <input type="search"
       placeholder="Enter City Name"
       className="form-control"
       />
    </div>
     <div>
        <input type="submit"
        value="Search"
        className="btn btn-primary"/>
     </div>
    </div>
    </form>
        <h1>New York</h1>
        <ul>
            <li>Thursday 7:00 PM</li>
            <li>Cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6">
            <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="Cloudy"/> 11°C
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation:2%</li>
                    <li>Humidity:75%</li>
                    <li>Wind:6km/h</li>
                </ul>
            </div>
        </div>
    </div>
   );
}