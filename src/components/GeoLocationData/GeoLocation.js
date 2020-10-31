//This function is not setup correctly!

const $geolocateButton = document.getElementById('geolocation-button');
$geolocateButton.addEventListener('click', geolocate);

const geolocate = () => {
  if (window.navigator && window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
  }
}


function onGeolocateSuccess(coordinates) {
  const { latitude, longitude } = coordinates.coords;
  console.log('Found coordinates: ', latitude, longitude);
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