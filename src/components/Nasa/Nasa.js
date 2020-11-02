// import React, {useState, useEffect} from 'react';



// const SatImage = () => {
//     const [date, setDate] = useState('');
//     const [longitude, setLongitude] = useState('');
//     const [latitude, setLatitude] = useState('');
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState({}); 

    
//     const fetcher = () => {
//           fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${lon}&lat=${lat}&date=${date}&api_key=8B4OgnuuFZO6spPPSOnE6r8PtEf964ctngkZubO1`) 
//            .then(res => res.json())
//            .then(json => {
//             console.log(json)
//             setResults(json);
//            })
//          }

//     return(
//         <div className="main">
//             <div className="mainDiv">
//                 <input value={query} onChange={e => setQuery(e.target.value)} placeholder="enter your location here"/>
//                 <button onClick={() => fetcher()}>Click for location.</button>
//                 {results ? <div>{results.imagery}</div> : <div></div>}
//             </div>
//         </div>
//     )
// }

// export default SatImage;




// const Nasa = (props) => {

//     const [NasaData, setNasaData] = useState({})
    
//     useEffect(
//         () => {
//             fetchNasa()
//         }, []
//     )

//     const fetchNasa = () => {
//         fetch(`https://api.nasa.gov/planetary/earth/imagery/assets?lon=${longitude}&lat=${latitude}&date=today&api_key=8B4OgnuuFZO6spPPSOnE6r8PtEf964ctngkZubO1`, {
//             method: 'GET',
//         }).then( r => r.json())
//         .then( rArr => console.log(rArr))
//     }

//     return (
//         <div>
//             <div>Location</div>
//           <button onClick={() => fetchNasa()}>Click for location.</button>
//         </div>
//     )
// }
import React from 'react';

class Nasa extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://api.nasa.gov/planetary/earth/imagery?lon=${props.location.longitude}&lat=${props.location.latitude}&date=today&api_key=knU5BSl3W8gifezdjFE8w6ooqenWfsRXBKBRnHjt';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}


export default Nasa;