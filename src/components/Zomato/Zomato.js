import React, { useState, useEffect } from 'react';


const Zomato = (props) => {

    const [ZomatoData, setZomatoData] = useState([])
    
    useEffect(
        () => {
            fetchZomato()
        }, []
    )

    const fetchZomato = () => {
        fetch('https://developers.zomato.com/api/v2.1/locations?', {
            method: 'GET',
        }).then( r => r.json())
        .then( rArr => console.log(rArr))
    }

    return (
        <div>

        </div>
    )
}


export default Zomato
