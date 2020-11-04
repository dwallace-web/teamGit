import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import { render } from "react-dom";
import { Button } from 'reactstrap';
import Zomato from './components/Zomato/Zomato';
import Nasa from './components/Nasa/Nasa'

const App = () => {
  console.log('render')

  const [locationReq, setLocationReq] = useState(false);
  // const [location, setLocation] = useState();

  const [location, setLocation] = useState('');
  const [GeoIsReturned, setGeoIsReturned] = useState(false);

  useEffect(() => {
    async function geolocate() {
      if (window.navigator && window.navigator.geolocation) {
        console.log('geolocate ran!')
        navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
      }
    }

    async function onGeolocateSuccess(position) {
      let { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude })
      console.log('onGeolocateSuccess', latitude, longitude)
      setGeoIsReturned(true)
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
    geolocate();
  }, [])

  return (
    <div className="App">
      <div className="Container">
        {/* <h1>Weather API Goes here:</h1> */}
        {/* Add Weather API */}

        {/* Add Nasa API */}


        <h1> Zomato Data </h1>
        {GeoIsReturned ? <Zomato location={location} /> : <h1>Location not available!</h1>}


        <Nasa location={location} />
        {/* <Button color="primary">Confirm reactstrap install!</Button> */}
      </div>




    </div>
  );
}

export default App;
