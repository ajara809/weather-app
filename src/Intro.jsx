import "bootstrap/dist/css/bootstrap-grid.min.css";
import './styles/intro.css'
import { useNavigate } from "react-router-dom";

function Intro() {

    const navigate = useNavigate();

    const handlebutton = () =>{
        navigate('/weather')
    }

    return (
        <>
            <div className="container-fluid" id="container-i">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-3" >
                        <h1>AJ Weather App</h1>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                        <p>
                            Welcome to the <strong>Aj Weather App</strong> This application is designed to provide you with real-time
                            weather data from cities all over the world. You can type any city’s name in the search bar
                            above and click the button to get details like temperature, humidity, wind speed, and
                            weather conditions. The data is powered by the OpenWeatherMap API, which ensures
                            accuracy and updates frequently. Weather can be unpredictable, so use this app to plan
                            your day, know if you need an umbrella, or just satisfy your curiosity about the climate
                            in different parts of the globe. Remember, weather affects everything from our moods
                            to our plans, so staying informed is always useful. Whether you are a traveler, a student,
                            or someone who simply enjoys exploring new places, this app will give you insights into
                            how the skies look in places you’ve never been. The interface is simple, so even if you
                            are new to technology, you will find it easy to use. We hope this app adds a little fun
                            and knowledge to your daily life, and maybe even sparks your interest in meteorology!
                            Keep exploring, keep learning, and never underestimate the power of knowing what’s
                            happening in the world above you. Enjoy your journey with the Weather App!
                        </p>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-3" >
                        <button onClick={handlebutton}>GO</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro