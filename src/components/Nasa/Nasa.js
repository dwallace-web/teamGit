import React, { useState, useEffect } from 'react';
import NasaImage from './NasaImage';


const apiKey = 'UyUy0iy0DlwgItTchMTyfjQL9FuxrbLWl7uDkbG4'

const Nasa = (props) => {

    const [NasaData, setNasaData] = useState([]);


    console.log('data in Nasa', props.location);

    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    let outside

    useEffect(() => {
        console.log('nasa useeffect called')

        const fetchNasa = () => {
            fetch("https://api.nasa.gov/planetary/earth/imagery?lon=-86.147072&lat=39.845887999999995&date=2019-11-03&api_key=UyUy0iy0DlwgItTchMTyfjQL9FuxrbLWl7uDkbG4", requestOptions)
                .then(response => response.json())
                .then(pic => console.log(pic))
                .catch(error => console.log('error', error));
            console.log('fetch nasa')
            fetchNasa();
            console.log('fetch nasa ran!')
        }}
            , [])

    return (
        <div>
            <h2>Nasa Image!</h2>
            <NasaImage NasaData={NasaData} />
        </div>
    )
}


export default Nasa;