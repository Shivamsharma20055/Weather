import { useState } from "react";
import {GetData} from'./GetData'

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("delhi");
  const[loading,setloading]=useState(false);

  async function click() {
    if(city===''){
      alert("plaese enter city");
    }
    setloading(true);
    const res = await GetData(city);
    setData(res);
    localStorage.setItem('city',city);
    localStorage.setItem('WindSpeed',res.current.wind_speed_10m);
    localStorage.setItem('Temperature',res.current.temperature_2m);
    localStorage.setItem('humidity',res.current.relative_humidity_2m)
    localStorage.setItem('rain',res.current.rain);
    setloading(false);
    
    
    
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
          disabled={loading}
          className="px-4 py-2 bg-cyan-700 text-white font-bold rounded-lg hover:bg-cyan-800 transition"
        >
          {loading ? (
            <svg
              className="w-5 h-5 text-white animate-spin mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          ) : (
            "Get Weather"
          )}
     
        </button>
      </div>

      
        <div className="bg-cyan-200 rounded-xl p-6 shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-semibold text-cyan-900 mb-4">{localStorage.getItem('city')}</h2>
          <p className="mb-2 text-lg">
            Temperature: {localStorage.getItem('Temperature')}°C
          </p>
          <p className="mb-1">Wind Speed: {localStorage.getItem('WindSpeed')} km/h</p>
              <p className="mb-1">rain:{localStorage.getItem('rain')}</p>
              <p>humidity: {localStorage.getItem('humidity')}</p>
         
        </div>
     
    </div>
  );
}

export default App;
