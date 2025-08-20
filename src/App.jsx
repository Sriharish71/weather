import { useState } from "react";
import "./App.css";

function App(){
  const [weather, setWeather] = useState({
    
  emoji : "",
  text : ""
  });
  return (
      <div className="app" style={{ backgroundColor: weather.color }}>
        <div className="card">
          <h1>Weather Emoji</h1>
          <div className="emoji">{weather.emoji}</div>
          <p>{weather.text}</p>
           <div className="button">
            <button className="sunny" onClick={() => setWeather({emoji : "🌞", text : "It's a bright sunny day!", color: "#bd9d3d",})}>Sunny</button>
            <button className="rainy" onClick={() => setWeather({emoji : "🌧️", text : "Don't forget your umbrella!", color: "#07153d",})}>Rainy</button>
            <button className="cold" onClick={() => setWeather({emoji : "❄️", text : "Don't forget your umbrella!", color: "#5198b9",})}>Cold</button>
            <button className="cloudy" onClick={() => setWeather({emoji : "☁️", text : "Clouds covered the sky!", color: "gray",})}>Cloudy</button>

          </div>
        </div>
    </div>
  )
}
export default App;