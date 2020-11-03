import React, {useState} from 'react';


const apiKey = 'UyUy0iy0DlwgItTchMTyfjQL9FuxrbLWl7uDkbG4'

const Nasa = (props) => {

    const [NasaData, setNasaData] = useState([]);
    

    console.log('data in Nasa', props.location);
    
    // useEffect(
    //     () => {
    //         fetchNasa()
    //     }, []
    // )

    let myHeaders = new Headers();
    myHeaders.append("user-key", "UyUy0iy0DlwgItTchMTyfjQL9FuxrbLWl7uDkbG4");

    let requestNasaData = {
        method: 'GET',
        headers: myHeaders,
        
    }

    const fetchNasa = () => {
         fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${props.location.longitude}&lat=${props.location.latitude}&date=2020-11-03&api_key=${apiKey}`, requestNasaData) 
            
        // .then( r => r.json())
        .then( res => console.log(res))
        .catch(error => console.log('error', error))
    }

    if (props.location !== undefined) {
        fetchNasa();
    } else {
        console.log('geolocation is not available!')
    }
    

    return (
        <div>
        
        </div>
    )
}


export default Nasa;