import { useState } from "react"
import './styles/weather.css'
import temp from './assets/temperature.png'
import hum from './assets/humidity.png'
import wind from './assets/wind.png'
import pressure from './assets/pressure-gauge.png'
import { useNavigate } from "react-router-dom";


function Weather() {

    const [city, setCity] = useState("");
    const [view, setView] = useState(null);
    const navigate = useNavigate();

    const handleClick = () => {

        if (city.trim() === "") return;   //ignore empty input
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ab6acd403a22ce70502bbc84dcd1005c&units=metric`)
            .then((response) => { return response.json() })
            .then((api) => {

                setView({
                    name: api?.name,        //?.optional chaining this checks if object is exists before it runs
                    country: api?.sys?.country,
                    temp: api.main?.temp,
                    humidity: api.main?.humidity,
                    wind: api.wind?.speed,
                    pressure: api.main?.pressure,
                    icon: api.weather?.[0]?.icon,
                    desc: api.weather?.[0]?.description,
                });
            })
    }

    const nextPage = () => {
        navigate('/forecast', { state: { city } });
    }

    return (
        <>

            <div id="body_w">
                <h1 id="head">Weather App</h1>


                <div id="container">
                    <form>
                        <input type="text" onChange={(e) => { setCity(e.target.value) }} value={city} placeholder=" Type Here...." /> &nbsp;
                        <button type="button" onClick={handleClick}>Search</button>
                    </form>

                    <div id="view">
                        {view ? (
                            <>
                                <p id="name">
                                    {view.name}, {view.country}
                                </p>

                                <div id="container_1">
                                    <div className="card">
                                        <p>Temperature</p>
                                        <img src={temp} className="icon" />
                                        <p>{view.temp}°C</p>
                                    </div>
                                    <div className="card">
                                        <p>Humidity</p>
                                        <img src={hum} className="icon" />
                                        <p>{view.humidity}%</p>
                                    </div>
                                </div>

                                <div id="container_2">
                                    <div className="card">
                                        <p>Wind Speed</p>
                                        <img src={wind} className="icon" />
                                        <p>{view.wind} m/s</p>
                                    </div>
                                    <div className="card">
                                        <p>Pressure</p>
                                        <img src={pressure} className="icon" />
                                        <p>{view.pressure}</p>
                                    </div>
                                </div>

                                <div id="container_3" className="card">
                                    <p >Description</p>
                                    <img
                                        src={`https://openweathermap.org/img/wn/${view.icon}@2x.png`}
                                        id="icon"
                                    />
                                    <p>{view.desc}</p>
                                </div>
                                <p id="for" onClick={nextPage}>Want to Check 5-day forecast?</p>

                            </>
                        ) : (
                            <p>Enter a city and click Search.</p>
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Weather