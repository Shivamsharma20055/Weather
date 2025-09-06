import { useState } from "react";
import {GetData} from'./GetData'

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("delhi");

  async function click() {
    if(city===''){
      alert("plaese enter city");
    }
    const res = await GetData(city);
    setData(res);
    
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-100 p-4">
      <h1 className="text-3xl font-bold text-cyan-800 mb-6">Weather App</h1>

      <div className="flex gap-4 mb-6">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Enter city"
          className="px-4 py-2 rounded-lg border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button
          onClick={click}
          className="px-4 py-2 bg-cyan-700 text-white font-bold rounded-lg hover:bg-cyan-800 transition"
        >
          Get Weather
        </button>
      </div>

      {data && data.current  && (
        <div className="bg-cyan-200 rounded-xl p-6 shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold text-cyan-900 mb-4">{city}</h2>
          <p className="mb-2 text-lg">
            Temperature: {data.current.temperature_2m}°C
          </p>
          <p className="mb-1">Wind Speed: {data.current.wind_speed_10m} km/h</p>
              <p className="mb-1">rain: {data.current.rain}</p>
              <p>humidity: {data.current.relative_humidity_2m}</p>
         
        </div>
      )}
    </div>
  );
}

export default App;
