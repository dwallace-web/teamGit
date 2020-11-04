import React, { useState, useEffect } from 'react';
import ZomatoCard from './ZomatoCard'


const Zomato = (props) => {

    const [searchResults, setSearchResults] = useState([]);

    console.log("data in zomato", props.location);
    // console.log("data in zomato", props.location.latitude);
    // console.log("data in zomato", props.location.longitude);

    let myHeaders = new Headers();
    myHeaders.append("user-key", "c276dec83e71d055a01a06e330115976");

    let requestData = {
        method: 'GET',
        headers: myHeaders
    };    

    useEffect(() => {
        console.log('useeffect called');

        const fetchZomato = () => {
            fetch(`https://developers.zomato.com/api/v2.1/search?&lat=${props.location.latitude}&lon=${props.location.longitude}`, requestData)
                .then(r => r.json())
                .then(res => setSearchResults(res.restaurants))
                .catch(error => console.log('error', error))
        }
    
        console.log('call fetchzomato')
        fetchZomato();
        console.log('fetch ran');
        
    }, [])



    // if (props.location != undefined) {
    //     fetchZomato();
    // } 
    // else {
    //     console.log('geolocation is not available!')
    // }


    return (
        <div>
            <h2>Zomato Results!</h2>
            { searchResults.length > 0 ? <ZomatoCard searchResults={searchResults} /> : null }


        </div>
    )
}


export default Zomato