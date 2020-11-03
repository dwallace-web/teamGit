import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Zomato from './components/Zomato/Zomato';
import Nasa from './components/Nasa/Nasa'
const App = () => {

  const [locationReq, setLocationReq] = useState(false);
  const [location, setLocation] = useState();

  const geolocate = () => {
    if (window.navigator && window.navigator.geolocation) {
      console.log('geolocate ran!')
      navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
    }
  }

  const onGeolocateSuccess = (position) => {
    let { latitude, longitude } = position.coords;
    setLocation(
      { latitude, longitude }
    )
  }

  const onGeolocateError = (error) => {
    console.warn(error.code, error.message);
    if (error.code === 1) {
      console.log("user said no!")
    } else if (error.code === 2) {
      console.log("no data available")
    } else if (error.code === 3) {
      console.log("timeout errror")
    }
  }

  if (locationReq != true) {
    console.log("location 1", locationReq);
    setLocationReq(true);
    console.log("location 2", locationReq);
    geolocate();
  }

  

  return (
    <div className="App">
      <div className="Container">
        <h1>Weather API Goes here:</h1>
        {/* Add Weather API */}

        {/* Add Nasa API */}
        

        <h1> Zomato Data </h1>
        <Zomato location={location} />
      </div>

      {/* <Button color="primary">Confirm reactstrap install!</Button> */}
     
      <Nasa location= {location}/>
    </div>
  );
}

export default App;
