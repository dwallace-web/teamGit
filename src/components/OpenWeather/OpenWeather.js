import React, {useState} from 'react';

const Weather = (props) => {

    const [WeatherData, setWeatherData] = useState([])

    console.log("data in openweather", props.location);

    let myHeaders = new Headers();
    myHeaders.append("user-key", "bebe5e652846ece05974e7b9d6d7f054");

    let requestWeatherData = {
        method: "GET",
        headers: myHeaders,
    };

        const fetchWeather = () => {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.location.latitude}&lon
            =${props.location.longitude}&exclude=hourly,daily&appid=bebe5e652846ece05974e7b9d6d7f054`)

            .then( res => console.log(res.json))
            .catch(error => console.log('error', error))
        }

        if (props.location !== undefined) {
            fetchWeather();
        }else {
            console.log('geolocation is not available!')
        }
    

    return (
        <div>
            <h1>Local Weather</h1>
            {/* {searchResults.length > 0 ? <WeatherCard searchResults={searchResults} /> : null} */}
        </div>
    )
}


export default Weather