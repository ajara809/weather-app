import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import './styles/forecast.css'

function Forecast() {

    const [forecast, setForecast] = useState([]);
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const location = useLocation();
    const city = location.state?.city;

    useEffect(() => {
        setLoading(true);
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ab6acd403a22ce70502bbc84dcd1005c&units=metric`)
            .then((response) => { return response.json() })
            .then((api) => {

                // pick every 8th item = 1 forecast per day
                const fiveDays = api.list.filter((item, index) => index % 8 === 0);
                setForecast(fiveDays);

            })
            setTimeout(()=>{
                setLoading(false);
            },1000)
            
    }, [])

    if(loading) return <div id="d_f">Loading Informations....</div>

    const back = () =>{
        navigate('/')
    }
    return (
        <>
            <div id="body_w2">
                <h1 id="h_f">5-Days ForeCast</h1>
                <h1>{city}</h1>
                <div id="container_f">
                    {forecast.map((item, index) => (
                        <div key={index}>
                            <p id="date">{item.dt_txt}</p>
                            <div id="cards_f">
                                <p>{item.main.temp}°C</p>
                                <p>{item.weather[0].description}</p>
                                <img
                                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                    alt={item.weather[0].description}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <button id="but_f" onClick={back} >Back</button>
            </div>
        </>
    )
}

export default Forecast;