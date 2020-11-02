import React, { useState } from 'react';
import ZomatoCard from './ZomatoCard'

const Zomato = (props) => {

    const [searchResults, setSearchResults] = useState([]);

    console.log("data in zomato", props.location);
    // console.log('confirm lat', props.location.latitude)
    // console.log('confirm lon', props.location.longitude)

    let myHeaders = new Headers();
    myHeaders.append("user-key", "c276dec83e71d055a01a06e330115976");

    let requestData = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    /* async */ function fetchZomato() {
        /* await */ fetch(`https://developers.zomato.com/api/v2.1/search?&lat=${props.location.latitude}&lon=${props.location.longitude}`, requestData)
            .then(r => r.json())
            .then(res => console.log(res.restaurants))
            .catch(error => console.log('error', error))
    }

    if (props.location !== undefined) {
        fetchZomato();
    } else {
        console.log('geolocation is not available!')
    }

    return (
        <div>

            <h2>Zomato Results!</h2>
            {/* {
                    results.length > 0 ? <NytResults results={results}  changePage={changePageNumber} /> : null
                } */}
        </div>
    )
}


export default Zomato