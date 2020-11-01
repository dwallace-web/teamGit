import React, {useState, useEffect} from 'react';


const Nasa = (props) => {

    const [NasaData, setNasaData] = useState({})
    
    useEffect(
        () => {
            fetchNasa()
        }, []
    )

    const fetchNasa = () => {
        fetch('https://api.nasa.gov/planetary/earth/imagery?lon={query}&lat={query}&date={query}&api_key=8B4OgnuuFZO6spPPSOnE6r8PtEf964ctngkZubO1', {
            method: 'GET',
        }).then( r => r.json())
        .then( rArr => console.log(rArr))
    }

    return (
        <div>
          
        </div>
    )
}


export default Nasa