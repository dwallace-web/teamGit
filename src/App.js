import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import { render } from "react-dom";
import Zomato from './components/Zomato/Zomato';

const App = () => {
  console.log('render')

  const [location, setLocation] = useState('');
  const [dataIsReturned , setdataIsReturned ] = useState(false);

  useEffect(() => {
    async function geolocate() {
      if (window.navigator && window.navigator.geolocation) {
        console.log('geolocate ran!')
        navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
      }
    }

    async function onGeolocateSuccess (position) {
      let { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude })
      console.log('onGeolocateSuccess', latitude, longitude)
      setdataIsReturned  (true)
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
        { dataIsReturned ? <Zomato location={location} /> : <h1>Slow Down</h1>  }

      </div>

    </div>
  );
}

export default App;
