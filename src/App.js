import './App.css';
import { Button } from 'reactstrap';
import GeoLocationData from './components/GeoLocationData/GeoLocation';
import Nasa from './components/Nasa/Nasa';

function App() {

  return (
    <div className="App">

      <Button color="primary">Confirm reactstrap install!</Button>
      <GeoLocationData />
      <Nasa />
    </div>
  );
}

export default App;
