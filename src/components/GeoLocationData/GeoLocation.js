import React, { useState } from 'react';

const GeoLocationData = () => {

  const [ location, setLocation ] = useState();

  const geolocate = () => {
    if (window.navigator && window.navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
    }
  }


  function onGeolocateSuccess(position) {
    
    let { latitude, longitude } = position.coords;

    setLocation(
      {       latitude,       longitude       }
    )
    
    console.log(location);
  }

  function onGeolocateError(error) {
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

  return (

    <div>GeoLocationData</div>
  )
}


export default GeoLocationData